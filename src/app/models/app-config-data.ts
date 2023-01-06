import { Filter } from './filter';

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
}
