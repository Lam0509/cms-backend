import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  healthCheck(): string {
    return 'OK';
  }

  @Get('/test-github-workflow')
  testGithubWorkflow(): string {
    return 'Hello World!';
  }
}
