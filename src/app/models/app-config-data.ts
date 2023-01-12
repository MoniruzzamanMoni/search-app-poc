import { Dimension } from './dimension';
import { Filter } from './filter';
import { TopicFeatureConfig } from './topic-feature-config';

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
    const aN = collections.findIndex(c => c['N'] === a.id);
    const bN = collections.findIndex(c => c['N'] === b.id);
    if (aN === bN) { return 0; }
    if (aN > bN) { return 1; }
    return -1;
  }
}
