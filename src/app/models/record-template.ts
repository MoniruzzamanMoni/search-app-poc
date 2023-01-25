import { EneRecord } from './enerecord';
import {EneRecordImpl} from './enerecord-impl';
import {TplField} from './tplfield';
import { findLastIndex, uniqBy } from 'lodash';
import {SearchResult} from './search-result';
import { Link } from './link';

export class RecordTemplate {
  private static readonly supportedTreatyArticlesCollection = ['treaties'];
  private _onScreen: any[] = [];
  private readonly eneRecImpl: EneRecordImpl;

  constructor(
    private readonly tpl: TplField[],
    private readonly eneRecord: EneRecord,
    private readonly topicSearchChips: any[],
    private readonly topicSearchMatcher: RegExp,
    ) {
      this.eneRecImpl = new EneRecordImpl(eneRecord);
  }

  public getOnScreen() {
    this._onScreen = this.eneRecImpl.compileTemplate(this.tpl, this.isAggregated(), this.topicSearchChips);

    if (this.hasTreatyArticles() && !this.isEmpty()) {
      this.insertTreatyArticles();
    }

    const shouldModifyAggrTitleFromChunks = this.getAggrTitleLinkIndex() > -1 && this.getChunkPaths().length > 0;
    if (shouldModifyAggrTitleFromChunks) {
      this.modifyAggrTitleLink();
    }
    return this._onScreen;
  }

  public getChunkPaths() {
    return this.isAggregated() ? this._onScreen.filter(chunkItem => chunkItem['field'] !== 'aggrtitlelink' && !!chunkItem['path'])
      .map(chunkItem => chunkItem['path']) : [];
  }

  private getAggrTitleLinkIndex() {
    return this._onScreen.findIndex(v => v.field === 'aggrtitlelink');
  }

  private isEmpty() {
    return this._onScreen.length === 0;
  }

  private insertTreatyArticles() {
    const insertPosition = findLastIndex(this._onScreen, v => v.field === 'titlelink') + 1;
    this._onScreen.splice(insertPosition, 0, {field: 'treaty-articles', relatedTreatyArticles: this.getRelatedTreatyArticles()});
  }

  private isAggregated(): boolean {
    return !!this.eneRecord.records;
  }

  private hasTreatyArticles(): boolean {
    const collectionCode = this.eneRecImpl.getProperty(this.isAggregated(), 'collection_code');
    return !!collectionCode && RecordTemplate.supportedTreatyArticlesCollection.includes(collectionCode) && !!this.topicSearchMatcher;
  }

  private getRelatedTreatyArticles(): any[] {
    const endecaRelationRefs = new EneRecordImpl(this.eneRecord.records?.find(Boolean))
            .getProperties(this.isAggregated(), SearchResult.EDCA_PROP_RELATION_REFS);
    const relatedTreatyArticles = endecaRelationRefs.filter(ref => this.topicSearchMatcher.test(ref))
                                .map(ta => {
                                  const [, , docId, title] = ta.split(/\//);
                                  return new Link(title.trim(), docId);
                                });
    return uniqBy(relatedTreatyArticles, (ta: Link) => ta.docId)
          .sort((a: Link, b: Link) => a.title.localeCompare(b.title, 'en-u-kn-true'));
  }


  private modifyAggrTitleLink() {
    const chunkPaths = this.getChunkPaths();
    this._onScreen[this.getAggrTitleLinkIndex()] = {
      ...this._onScreen[this.getAggrTitleLinkIndex()],
      docid: this.getDocId(),
      path: chunkPaths[0]
    };
  }

  private getDocId() {
    return this.eneRecImpl.getProperties(this.isAggregated(), 'docid')[0];
  }

}
