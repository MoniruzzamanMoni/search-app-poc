/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimension } from './dimension';
import { Filter } from './filter';
import { TopicFeatureConfig } from './topic-feature-config';
import { TplField } from './tplField';

export class AppConfigData {
  private readonly configMap: any = {};

  constructor(data: any) {
    Object.keys(data).forEach((key) => (this.configMap[key] = data[key]));
  }

  getCollectionFilters(collectionId: number): Filter[] {
    const collection: any = this.getCollections().find(
      (col: any) => col['N'] === collectionId
    );
    return collection && collection['filters']
      ? collection['filters']
      : this.getDefaultCollectionFilters();
  }

  private getCollections(): any[] {
    return this.configMap['collections'];
  }

  private getDefaultCollectionFilters(): Filter[] {
    return this.getCollections().find((col: any) => col['N'] === 0)['filters'];
  }

  getTopicFeatureConfig(): TopicFeatureConfig {
    return new TopicFeatureConfig(this.configMap['topic']);
  }

  public sortCollection(a: Dimension, b: Dimension): number {
    const collections = this.getCollections();
    const aN = collections.findIndex((c) => c['N'] === a.id);
    const bN = collections.findIndex((c) => c['N'] === b.id);
    if (aN === bN) {
      return 0;
    }
    if (aN > bN) {
      return 1;
    }
    return -1;
  }

  getCollectionResultTemplate(
    category: number,
    collectionCode: string
  ): TplField[] {
    const collection = this.getCollections().find(
      (col) => col['N'] === category && this.hasCode(col, collectionCode)
    );
    const subcollection =
      collection &&
      collection['subcollections'] &&
      collection['subcollections'].find((sub: any) =>
        this.hasCode(sub, collectionCode)
      );
    if (subcollection && subcollection['template']) {
      return subcollection['template']['name']
        ? this.getTemplateByName(subcollection['template']['name'])
        : subcollection['template'];
    }
    if (collection && collection['template']) {
      return collection['template']['name']
        ? this.getTemplateByName(collection['template']['name'])
        : collection['template'];
    }
    return this.getDefaultCollectionResultTemplate();
  }

  private hasCode(collection: any, code: string): boolean {
    if (collection['collection_code']) {
      const found = collection['collection_code'].find((c: string) => c === code);
      return !!found;
    }
    return false;
  }

  private getTemplateByName(name: string): TplField[] {
    return this.getTemplates().find((tpl) => tpl['name'] === name)['fields'];
  }

  private getDefaultCollectionResultTemplate(): TplField[] {
    const t = this.getCollections().find((col) => col['N'] === 0)['template'];
    return t['name'] ? this.getTemplateByName(t['name']) : t;
  }

  private getTemplates(): any[] {
    return this.configMap['templates'];
  }
}
