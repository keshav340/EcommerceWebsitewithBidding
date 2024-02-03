import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Started Coding on 4 Feb 2024';
  }
}
