import { Component } from '@angular/core';
import { filter, map, mergeMap, Observable, Subject } from 'rxjs';
import { AppConfigData } from '../models/app-config-data';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';
import { TopicData } from '../models/topic';
import { TopicConfig } from '../models/topic-config';
import { TopicServiceConfig } from '../models/topic-service-config';
import { AppConfigService } from '../services/app-config.service';
import { EndecapodService } from '../services/endecapod.service';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.component.html',
  styleUrls: ['topics.component.css'],
})
export class TopicsComponent {
  topicServiceConfigs: TopicServiceConfig[] = [];

  private appConfigData: AppConfigData;

  private result: Subject<Observable<any>> = new Subject();

  private topicConfig: TopicConfig | undefined;
  topics: any[] | undefined;
  topicData: TopicData | undefined;

   private loadResultOn = {
    [SearchEventType.AddFilter]: true,
    [SearchEventType.RemoveFilter]: true,
    [SearchEventType.CategoryChange]: true
  };

  constructor(
    private endeca: EndecapodService,
    private appconfigService: AppConfigService,
    private searchEventBus: SearchEventBusService,
    private searchService: SearchService
  ) {

    this.processResult();
    this.searchEventBus.on().
    pipe(
      filter((evt: SearchEvent) => this.loadResultOn[evt.type])
    ).subscribe((evt: SearchEvent) => {
      if (this.topicData) {
        this.topicData.data = [];
      }
      console.log('Time to load the topics again', evt);
      this.result.next(this.endeca.queryUrl(this.makeUrl(this.searchService.getNavigationsString())))
    })

    this.appConfigData = new AppConfigData(this.appconfigService.config);
    this.appConfigData
      .getTopicFeatureConfig()
      .getTopicSearchConfig()
      .getEnabledTaxonomies()
      .map((topicConfig) => {
        this.topicConfig = topicConfig;
        this.result.next(this.endeca.queryUrl(topicConfig.query));
      });

    }

    private processResult() {
      this.result.asObservable()?.pipe(
          mergeMap((res) => res.pipe(map((res) => res))),
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

   private makeUrl(navigations?: string): string {
    return `N=3+10+${navigations || ''}&Ne=7838+7839+7840+7841&select=relative_path"`;
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
