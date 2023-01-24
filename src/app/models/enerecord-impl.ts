import { Dimension } from "./dimension";
import { EneRecord } from "./enerecord";

export class EneRecordImpl {

    constructor(private rec?: EneRecord) {
    }

    /*
     * If the property exists on the record level return it.
     * If not and we are aggregating, return the property of the first record of the aggregate result
     */
    public getProperty(aggregate: boolean, name: string): string | undefined {
        if (!this.rec) { return undefined; }
        if (this.rec.properties[name]) {
            return this.rec.properties[name][0];
        }
        if (aggregate) {
            return this.getAggrProperty(name, 0);
        }
        return '';
    }
    public getAggrProperty(name: string, recno: number): string | undefined {
        if (!this.rec) { return undefined; }
        if (this.rec.records && this.rec.records[recno]) {
            return this.rec.records[recno].properties[name] ? this.rec.records[recno].properties[name][0] : '';
        }
        return '';
    }
    /*
     * If the property exists on the record level return it.
     * If not and we are aggregating, return the property of the first record of the aggregate result
     */
    public getProperties(aggregate: boolean, name: string): string[] {
        if (!this.rec) { return []; }
        if (this.rec.properties[name]) {
            return this.rec.properties[name];
        }
        if (aggregate) {
            return this.getAggrProperties(name, 0);
        }
        return [];
    }
    public getAggrProperties(name: string, recno: number): string[] {
        if (!this.rec) { return []; }
        if (this.rec.records && this.rec.records[recno]) {
            return this.rec.records[recno].properties[name] ? this.rec.records[recno].properties[name] : [];
        }
        return [];
    }
    /*
     * If the dimensionValue exists on the record level return it.
     * If not and we are aggregating, return the property of the first record of the aggregate result
     */
    public getDimVal(aggregate: boolean, name: string): Dimension | undefined {
        if (!this.rec) { return undefined; }
        if (this.rec.dimensionValues && this.rec.dimensionValues[name]) {
            return this.rec.dimensionValues[name][0];
        }
        if (aggregate) {
            return this.getAggrDimVal(name, 0);
        }
        return <Dimension>{};
    }
    public getAggrDimVal(name: string, recno: number): Dimension | undefined {
        if (!this.rec) { return undefined; }
        if (this.rec?.records?.[recno]) {
            return this.rec.records[recno].dimensionValues[name] ? this.rec.records[recno].dimensionValues[name][0] : '';
        }
        return <Dimension>{};
    }
}
