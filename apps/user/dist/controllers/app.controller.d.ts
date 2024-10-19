import { AppService } from '../services/user.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<string>;
    healthCheck(): string;
    testGithubWorkflow(): string;
    testElasticsearch(): Promise<string>;
}
