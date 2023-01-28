export interface SearchEvent {
  type: SearchEventType;
  data: any;
}

export enum SearchEventType {
  AddFilter,
  RemoveFilter
}
