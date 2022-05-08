import { Injectable } from '@nestjs/common';
import * as convert from 'convert-units';

@Injectable()
export class AppService {
  getHello(): any {
    return convert(1).from('l').to('ml');
  }
}
