export interface TopicConfig {
  id: string;
  query: string;
  dimensions: number[];
  enabled: boolean;
  prefix?: string;
  name: string;
}
