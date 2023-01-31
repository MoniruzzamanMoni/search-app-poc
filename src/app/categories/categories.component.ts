import { Component, OnInit } from '@angular/core';
import { MatChipListboxChange, MatChipSelectionChange } from '@angular/material/chips';
import { AppConfigData } from '../models/app-config-data';
import { Dimension } from '../models/dimension';
import { SearchEventType } from '../models/search-event/search-event';
import { AppConfigService } from '../services/app-config.service';
import { EndecapodService } from '../services/endecapod.service';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  private categoryUrl = 'N=0&Ne=7487&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|1';
  private appConfigData: AppConfigData;
  private prevSelection: Dimension | undefined;
  category: Dimension = {id: 7487}
  constructor(
    private endeca: EndecapodService,
    private appConfigService: AppConfigService,
    private searchService: SearchService,
    private searchEventBus: SearchEventBusService
  ) {
    this.appConfigData = new AppConfigData(this.appConfigService.config);
  }

  ngOnInit(): void {
    this.endeca.queryUrl(this.categoryUrl).subscribe(res => {
      this.category.values =  res['dimensions'].find((d: Dimension) => d.id === 7487).values;
      this.category.values?.sort((a, b) => this.appConfigData.sortCollection(a, b));
    })
  }

  onChipChange(evt: MatChipListboxChange) {
    console.log('mat listbox change event: ', evt);
  }

  onSelectionChange(evt: MatChipSelectionChange, index: number) {
    const dim = this.category.values?.[index];
    if (this.prevSelection) {
      this.searchService.removeParam(this.prevSelection as Dimension);
      // this.searchEventBus.publish({type: SearchEventType.RemoveFilter, data: this.prevSelection});
    }

    this.searchService.addParam(dim as Dimension);
    this.searchEventBus.publish({type: SearchEventType.AddFilter, data: dim});

    this.prevSelection = dim;
  }
}
