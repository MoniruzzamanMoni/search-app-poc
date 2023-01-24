/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimension } from "./dimension";
import { EneQueryResult } from "./enequery-result";
import { EneRecord } from "./enerecord";

export class SearchResult {
     /**
      * Endeca property names
      */
    public static readonly EDCA_PROP_XML_SOURCE_FILE = 'xml_source_file';
    public static readonly EDCA_PROP_UID = 'uid';
    public static readonly EDCA_PROP_GLOBAL_TITLE = 'global_title';
    public static readonly EDCA_PROP_DECISION_DATE = 'decision_date';
    public static readonly EDCA_PROP_RELATION_REFS = 'Endeca.Relation.References';
    public static readonly EDCA_PROP_RELATIVE_PATH = 'relative_path';
    public static readonly EDCA_PROP_COLLECTION = 'collection_code';
    private result: EneQueryResult;

    constructor(result: EneQueryResult) {
        this.result = result;
    }
    public getResult(): any {
        return this.result;
    }
    public getReport(): any {
        return this.result ? this.result.reports : this.result;
    }
    public getRecords(): EneRecord[] {
        return this.result ? this.result.records : [];
    }
    public getDimensions(): Dimension[] | undefined {
        return this.result ? this.result.dimensions : undefined;
    }
    public getDimension(id: number): Dimension | undefined{
        let ret: Dimension | undefined;
        if (this.result) {
            this.result.dimensions.forEach((d: any) => {
                if (d.id === id) {
                    ret = d;
                }
            });
        }
        return ret;
    }

    public isAggregateQuery(): boolean {
        return !!this.result.query.navigationRollupKey;
    }
    public getNumRecs(): number {
        return this.result ? Number(this.result.results.numBins) : 0;
    }
    public getNumAggrRecs(): number {
        return this.result ? Number(this.result.results.numAggrBins) : 0;
    }
}
