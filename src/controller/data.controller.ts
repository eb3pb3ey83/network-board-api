// data.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import * as CTI_FLOAT from '../json/mock-data-cti-has-float.json';
import * as ESSO_FLOAT from '../json/mock-data-esso-has-float.json';
import * as ES from '../json/mock-data-es.json';
import * as ESSO from '../json/mock-data-esso.json';
import * as CTI from '../json/mock-data-cti.json';
import * as USR from '../json/mock-data-usr.json';

@Controller('v4')
export class DataController {
  @Get('data')
  getData(
    @Query()
    query: {
      role: string;
      so: string;
      subsid: string;
      token: string;
      display: string;
    },
  ) {
    const { role, display } = query;
    if (role === 'cti' && display === 'h') {
      return CTI_FLOAT;
    } else if (role === 'esso' && display === 'h') {
      return ESSO_FLOAT;
    } else if (role === 'esso') {
      return ESSO;
    } else if (role === 'cti') {
      return CTI;
    } else if (role === 'usr') {
      return USR;
    } else if (role === 'es') {
      return ES;
    }
  }
}
