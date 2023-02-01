import { Component, Input, OnInit } from '@angular/core';
import { AppConfigData } from '../models/app-config-data';
import { EneRecord } from '../models/enerecord';
import { EneRecordImpl } from '../models/enerecord-impl';
import { AppConfigService } from '../services/app-config.service';
import { RecordTemplate } from '../models/record-template';

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
  data: any[] = [];
  titleLinks: any[] = [];
  aggrTitleLinks: any[] = [];
  nestedTitleLinks: any[] = [];
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

    const recordTemplate = new RecordTemplate(tpl, this.result as EneRecord, [], new RegExp(/.*/));


    if (tpl) {
      this.data = recordTemplate.getOnScreen();
      console.log('DATA', this.data);
    }


    // this.data = JSON.parse('[{"field":{"field":"aggrtitlelink","input":[{"type":"prop","name":"docid","ref":"global_link"},{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"global_title"}]},"docid":"pe_ie","path":"/collections/pe/html/pe_ie_s_009.html","title":"Ireland - Permanent Establishments"},{"field":{"field":"commondate","input":[{"type":"prop","name":"date","ref":"global_reviewdate"},{"type":"literal","name":"label","ref":"Last reviewed"}]},"date":"9 December 2022","label":"Last reviewed"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_chaphead.html","title":"Latest Information"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_001.html","title":"1. Introduction to the Corporate Income Tax System"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_002.html","title":"2. Definition of Permanent Establishment"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_003.html","title":"3. Taxation of Income and Avoidance of Double Taxation"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_004.html","title":"4. Permanent Establishments versus Subsidiaries"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_005.html","title":"5. Taxation of Directors and Personnel of a Permanent Establishment"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_006.html","title":"6. Administration"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_007.html","title":"7. Anti-Avoidance"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_008.html","title":"8. Specific Industries"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_009.html","title":"9. Business Restructuring"},{"field":{"field":"titlelink","aggr":true,"sort":["sortorder","NUM"],"input":[{"type":"prop","name":"path","ref":"relative_path"},{"type":"prop","name":"title","ref":"short_title"}]},"path":"/collections/pe/html/pe_ie_s_010.html","title":"10. Future Developments"},{"field":{"field":"collection","input":[{"type":"dimVal","name":"name","ref":"subcategory"}]},"name":"Permanent Establishments"}]');

    const links = ['aggrtitlelink', 'titlelink', 'nestedtitlelink'];


    this.titleLinks = this.data.filter(f => f.field.field === 'titlelink');
    this.aggrTitleLinks = this.data.filter(f => f.field.field === 'aggrtitlelink');
    this.nestedTitleLinks = this.data.filter(f => f.field.field === 'nestedtitlelink');

    this.data = this.data.filter(f => !links.includes(f.field.field));
    console.log('data', this.data);
  }

}
