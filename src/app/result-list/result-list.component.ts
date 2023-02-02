import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { EneRecord } from '../models/enerecord';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';
import { SearchResult } from '../models/search-result';
import { EndecapodService } from '../services/endecapod.service';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  private defaultQuery = 'N=0&Ne=7487&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Ns=sort_date_common|1';
  searchResult: SearchResult | undefined;
  records: EneRecord[] = [];
  private loadResultOn = {
    [SearchEventType.AddFilter]: true,
    [SearchEventType.RemoveFilter]: true,
    [SearchEventType.CategoryChange]: true
  };
  constructor(
    private endeca: EndecapodService,
    private searchEventBus: SearchEventBusService,
    private searchService: SearchService
    ) {
  }

  ngOnInit() {

    this.searchEventBus.on()
    .pipe(
      filter((evt: SearchEvent) => this.loadResultOn[evt.type])
    )
    .subscribe(evt => {
        this.loadResult(this.makeUrl(this.searchService.getNavigationsString()));
    });

    this.loadResult(this.makeUrl());
  }

  private loadResult(query: string) {
    this.endeca.queryUrl(query).subscribe(res => {
      this.searchResult = new SearchResult(res);
      this.records = this.searchResult.getRecords();
    });
  }
  private makeUrl(navigations?: string): string {
    return `N=${navigations || '0'}&Ne=7487&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Ns=sort_date_common|1`
  }
}
