import { Injectable } from '@angular/core';
import { AppConfigData } from '../models/app-config-data';
import { Filter } from '../models/filter';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private appConfigData: AppConfigData;
  constructor(private appConfigService: AppConfigService) {
    this.appConfigData = new AppConfigData(this.appConfigService.config);
  }

  public getFilters(id: number): Filter[] {
    return this.appConfigData.getCollectionFilters(id);
  }
}
