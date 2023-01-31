import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppConfigData } from '../models/app-config-data';
import { TopicData } from '../models/topic';
import { TopicConfig } from '../models/topic-config';
import { TopicServiceConfig } from '../models/topic-service-config';
import { AppConfigService } from '../services/app-config.service';
import { EndecapodService } from '../services/endecapod.service';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.component.html',
  styleUrls: ['topics.component.css'],
})
export class TopicsComponent {
  topicServiceConfigs: TopicServiceConfig[] = [];

  private appConfigData: AppConfigData;
  private taxonomyResult: Observable<any> | undefined = undefined;
  private topicConfig: TopicConfig | undefined;
  topics: any[] | undefined;
  topicData: TopicData | undefined;
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
          return topics
            .map((t) => {
              const name = t.name;
              return {
                code: name.substring(0, name.indexOf(' ')),
                label: name.substring(name.indexOf(' ') + 1),
                id: t.id,
              };
            })
            .sort((t1, t2) =>
              t1.code.localeCompare(t2.code, undefined, {
                numeric: true,
                sensitivity: 'base',
              })
            );
        })
      )
      .subscribe((topics) => {
        this.topics = topics;
        this.topicData = this.buildTopicTree(this.topics, [], new Set());
      });
  }

  private buildTopicTree(
    taxtopics: any[],
    chips: any[],
    expandedNodes: Set<number>
  ) {
    return taxtopics.reduce(
      (acc, taxtopic) => {
        const node: any = {
          label: taxtopic['label'],
          data: taxtopic['code'],
          selectable: taxtopic['selectable'],
          id: taxtopic['id'],
          key: taxtopic['code'],
        };
        if (chips.find((id) => id === node.id)) {
          acc.selected.push(node);
        }
        node['expanded'] = expandedNodes.has(node.id);
        const parent = this.getTaxtopicParent(
          acc.data,
          this.getTaxtopicParentLabel(node.data)
        );
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
      },
      { data: [], selected: [] }
    );
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
        const taxtopicParent = this.getTaxtopicParent(
          taxtopic['children'],
          parentLabel
        );
        if (taxtopicParent) {
          return taxtopicParent;
        }
      }
    }
  }
}
