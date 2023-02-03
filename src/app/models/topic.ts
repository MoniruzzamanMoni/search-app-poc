
export interface TopicData {
  data: Topic[];
  selected: number[];
}
export interface Topic {
  id?: string;
  key?: string;
  label?: string;
  data?: string;
  disabled?: boolean;
  children: Topic[];
  parent?: Topic;
}

export interface TopicFlat {
  id?: string;
  key?: string;
  label?: string;
  data?: string;
  disabled?: boolean;
  level: number;
  expandable: boolean;
}
