import { Component, OnInit } from '@angular/core';
import { EneRecord } from '../models/enerecord';
import { SearchResult } from '../models/search-result';
import { EndecapodService } from '../services/endecapod.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  private defaultQuery = 'N=0&Ne=7487&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Ns=sort_date_common|1';
  searchResult: SearchResult | undefined;
  records: EneRecord[] = [];
  constructor(private endeca: EndecapodService) {
  }

  ngOnInit() {
    this.endeca.queryUrl(this.defaultQuery).subscribe(res => {
      console.log('Initial result: ', res);
      this.searchResult = new SearchResult(res);
      this.records = this.searchResult.getRecords();
      // this.searchResult.getRecords()?.forEach(rec => {
      //     const record = new EneRecordImpl(rec);
      //     console.log('collection', record.getDimVal(true, 'Collection'))
      //   }
      //   );
      // if (this.searchResult.isAggregateQuery()) {
      //   console.log('Aggregated');
      // } else {
      //   console.log('Not aggregated');
      // }
    });
  }
}
