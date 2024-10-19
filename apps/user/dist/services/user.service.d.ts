import { ElasticSearchService } from './elasticsearch.service';
export declare class AppService {
    private readonly elasticsearchService;
    constructor(elasticsearchService: ElasticSearchService);
    getHello(): Promise<string>;
}
