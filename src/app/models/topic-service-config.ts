import { TopicConfig } from './topic-config';

export class TopicServiceConfig {
  constructor(
  readonly endecapodUrl: string,
  readonly awareUrl: string,
  readonly topicConfig: TopicConfig,
  readonly suppressedChips: number[]) {  }
}
