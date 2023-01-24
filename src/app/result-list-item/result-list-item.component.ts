import { Component, Input, OnInit } from '@angular/core';
import { EneRecord } from '../models/enerecord';
import { EneRecordImpl } from '../models/enerecord-impl';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.css']
})
export class ResultListItemComponent implements OnInit{

  @Input()
  result: EneRecord | undefined;

  categoryName = '';
  collectionName = '';

  ngOnInit() {
    const aggregate = this.result && this.result.records ? true : false;
    const recordImpl = new EneRecordImpl(this.result);
    const categoryDimension = recordImpl.getDimVal(aggregate, 'category');
    const collection_code = recordImpl.getProperty(aggregate, 'collection_code');
    this.categoryName = categoryDimension?.name as string;
    this.collectionName = recordImpl.getDimVal(aggregate, 'Collection')?.name as string;
    console.log('Record: ', recordImpl);
  }
}
