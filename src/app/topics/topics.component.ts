import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AppConfigData } from '../models/app-config-data';
import { Topic, TopicFlat } from '../models/topic';
import { TopicConfig } from '../models/topic-config';
import { TopicServiceConfig } from '../models/topic-service-config';
import { AppConfigService } from '../services/app-config.service';
import { EndecapodService } from '../services/endecapod.service';


@Component({
  selector: 'app-topics',
  templateUrl: 'topics.component.html',
  styleUrls: ['topics.component.css']
})
export class TopicsComponent {

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


  topicServiceConfigs: TopicServiceConfig[] = [];

  private appConfigData: AppConfigData;
  private taxonomyResult: Observable<any> | undefined = undefined;
  private topicConfig: TopicConfig | undefined;
  topics: any[] | undefined;
  topicTree: any;
  constructor(
    private endeca: EndecapodService,
    private appconfigService: AppConfigService
  ) {
    this.appConfigData = new AppConfigData(this.appconfigService.config);
    this.appConfigData
      .getTopicFeatureConfig()
      .getTopicSearchConfig()
      .getEnabledTaxonomies()
      .map((topicConfig) => {
        this.topicConfig = topicConfig;
        console.log('taxonomy', topicConfig);
        this.taxonomyResult = this.endeca.queryUrl(topicConfig.query);
      });

    this.taxonomyResult
      ?.pipe(
        map((res) => {
          const topics: any[] = [];
          this.topicConfig?.dimensions.forEach((id) => {
            const dim = res['dimensions'].find((dim: any) => dim['id'] === id);
            topics.push(...(dim ? dim.values : []));
            // Todo: Consider taking chips later
          });
          return topics.map((t) => {
            const name = t.name;
            return {
              code: name.substring(0, name.indexOf(' ')),
              label: name.substring(name.indexOf(' ') + 1),
              id: t.id,
            };
          }).sort((t1, t2) => t1.code.localeCompare(t2.code, undefined, {numeric: true, sensitivity: 'base'}));
        })
      )
      .subscribe((topics) => {
        // console.log('taxonomy result: ', topics);
        this.topics = topics;
        this.topicTree = this.buildPrimeNgTree(this.topics, [], new Set());
        console.log(this.topicTree);
        // this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.topicTree);
        this.dataSource.data = this.topicTree.data;
      });

   this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren,
    );



    this.treeControl = new FlatTreeControl<TopicFlat>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

   private buildPrimeNgTree(taxtopics: any[], chips: any[], expandedNodes: Set<number>) {
    return taxtopics.reduce((acc, taxtopic) => {
      const node: any = {
        label: taxtopic['label'],
        data: taxtopic['code'],
        selectable: taxtopic['selectable'],
        id: taxtopic['id'],
        key: taxtopic['code']
      };
      if (chips.find(id => id === node.id)) {
        acc.selected.push(node);
      }
      node['expanded'] = expandedNodes.has(node.id);
      const parent = this.getTaxtopicParent(acc.data, this.getTaxtopicParentLabel(node.data));
      if (parent) {
        if (!parent['children']) {
          parent['children'] = [];
        }
        node['parent'] = parent;
        parent['children'].push(node);
      } else {
        acc.data.push(node);
      }
      return acc;
    }, {data: [], selected: []});
  }

  private getTaxtopicParentLabel(tc: string) {
    return tc.substring(0, tc.lastIndexOf('_'));
  }

  private getTaxtopicParent(acc: any[], parentLabel: string): any {
    for (let i = 0; i < acc.length; i++) {
      const taxtopic = acc[i];
      if (taxtopic['data'] === parentLabel) {
        return taxtopic;
      }
      if (taxtopic['children']) {
        const taxtopicParent = this.getTaxtopicParent(taxtopic['children'], parentLabel);
        if (taxtopicParent) {
          return taxtopicParent;
        }
      }
    }
  }



  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: Topic, level: number) => {
    debugger;
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.data === node.data ? existingNode : <TopicFlat>{};
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
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TopicFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TopicFlat): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TopicFlat): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
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
      descendants.every(child => {
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
