import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { SearchEventType } from '../models/search-event/search-event';
import { Topic, TopicData, TopicFlat } from '../models/topic';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-topic-tree',
  templateUrl: './topic-tree.component.html',
  styleUrls: ['./topic-tree.component.css'],
})
export class TopicTreeComponent {
  @Input()
  set topicData(val: TopicData | undefined) {
    if (val) {
      this.dataSource.data = val.data;
    }
  }

  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TopicFlat, Topic>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<Topic, TopicFlat>();

  /** A selected parent node to be inserted */
  selectedParent: TopicFlat | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TopicFlat>;

  treeFlattener: MatTreeFlattener<Topic, TopicFlat>;

  dataSource: MatTreeFlatDataSource<Topic, TopicFlat>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TopicFlat>(true /* multiple */);

  getLevel = (node: TopicFlat) => node.level;

  isExpandable = (node: TopicFlat) => node.expandable;

  getChildren = (node: Topic): Topic[] => node.children;

  hasChild = (_: number, _nodeData: TopicFlat) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TopicFlat) => _nodeData.label === '';

  constructor(
    private searchService: SearchService,
    private searchEventBus: SearchEventBusService
    ) {

    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl<TopicFlat>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: Topic, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.data === node.data
        ? existingNode
        : <TopicFlat>{};
    flatNode.id = node.id;
    flatNode.label = node.label;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TopicFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TopicFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TopicFlat): void {
    this.checklistSelection.toggle(node);

    this.handleSelection(node);


    // this.searchService.addFilters({id: node})

    // const descendants = this.treeControl.getDescendants(node);
    // this.checklistSelection.isSelected(node)
    //   ? this.checklistSelection.select(...descendants)
    //   : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    // descendants.forEach((child) => this.checklistSelection.isSelected(child));
    // this.checkAllParentsSelection(node);
  }
  private handleSelection(node: TopicFlat) {
    const dim = {id: parseInt(node.id || ''), name: node.label};

    if (this.checklistSelection.isSelected(node)) {
      this.searchService.addFilters(dim);
      this.searchEventBus.publish({type: SearchEventType.AddFilter, data: dim})
    } else {
      this.searchService.removeFilters(dim);
      this.searchEventBus.publish({type: SearchEventType.RemoveFilter, data: dim})
    }

  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TopicFlat): void {
    this.checklistSelection.toggle(node);
    // this.checkAllParentsSelection(node);
    this.handleSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TopicFlat): void {
    let parent: TopicFlat | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TopicFlat): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TopicFlat): TopicFlat | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
