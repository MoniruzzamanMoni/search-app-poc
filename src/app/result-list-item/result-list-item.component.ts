import { Component, Input, OnInit } from '@angular/core';
import { AppConfigData } from '../models/app-config-data';
import { EneRecord } from '../models/enerecord';
import { EneRecordImpl } from '../models/enerecord-impl';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.css'],
})
export class ResultListItemComponent implements OnInit {
  @Input()
  result: EneRecord | undefined;

  categoryName = '';
  collectionName = '';

  private appConfigData: AppConfigData;
  constructor(
    private appConfigService: AppConfigService,
  ) {
    this.appConfigData = new AppConfigData(this.appConfigService.config);
  }

  ngOnInit() {
    const aggregate = this.result && this.result.records ? true : false;
    const recordImpl = new EneRecordImpl(this.result);
    const categoryDimension = recordImpl.getDimVal(aggregate, 'category');
    const collection_code = recordImpl.getProperty(
      aggregate,
      'collection_code'
    );
    this.categoryName = categoryDimension?.name as string;
    this.collectionName = recordImpl.getDimVal(aggregate, 'Collection')
      ?.name as string;

    const tpl = this.appConfigData.getCollectionResultTemplate(
      categoryDimension?.id as number,
      collection_code as string
    );



  }

}
