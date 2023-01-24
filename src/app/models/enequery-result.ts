/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimension } from "./dimension";
import { EneRecord } from "./enerecord";

export interface EneQueryResult {
    about: any;
    analyses: any[];
    chips: any[];
    dimensions: Dimension[];
    endeca: string;
    query: any;
    records: EneRecord[];
    reports: any;
    results: any;
    self: any;
    session: any;
    /*
     * List of suppressed properties (endecapod configuration)
     */
    suppressed?: string[];
    timers: any;
}
