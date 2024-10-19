import { ElasticsearchService } from '@nestjs/elasticsearch';
export declare class ElasticSearchService {
    private readonly elasticsearchService;
    constructor(elasticsearchService: ElasticsearchService);
    indexDocument(index: string, document: any): Promise<import("@elastic/elasticsearch").ApiResponse<Record<string, any>, unknown>>;
    search(index: string, query: any): Promise<import("@elastic/elasticsearch").ApiResponse<Record<string, any>, unknown>>;
}
