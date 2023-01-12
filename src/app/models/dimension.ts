export interface Dimension {
    name?: string;
    readonly id: number;
    type?: string;
    values?: Dimension[];
    navigatable?: boolean;
    propertyMap?: object;
}
