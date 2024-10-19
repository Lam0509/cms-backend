import { Injectable } from '@nestjs/common';
import { ElasticSearchService } from './elasticsearch.service';

@Injectable()
export class AppService {
  constructor(private readonly elasticsearchService: ElasticSearchService) {}

  async getHello(): Promise<string> {
    await this.elasticsearchService.indexDocument('greetings', { message: 'Hello World!' });
    const result = await this.elasticsearchService.search('greetings', {
      query: {
        match: {
          message: 'Hello',
        },
      },
    });
    
    if (result.body && result.body.hits && result.body.hits.total) {
      return `Hello World! Elasticsearch found ${result.body.hits.total.value} matching documents.`;
    } else {
      return 'Hello World! Unable to retrieve Elasticsearch results.';
    }
  }
}