// measure.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import * as CTI_RESPONSE from '../json/measure_cti.json';
import * as ES_RESPONSE from '../json/measure_es.json';
import * as USR_RESPONSE from '../json/measure_usr.json';

const roleMapper = {
  es: ES_RESPONSE,
  usr: USR_RESPONSE,
  cti: CTI_RESPONSE,
};

@Controller('v4')
export class MeasureController {
  @Get(':so/:subsid/:role/:display/measure')
  measure(
    @Param('so') so: string,
    @Param('subsid') subsid: string,
    @Param('role') role: string,
    @Param('display') display: string,
  ) {
    // 在这里处理测量逻辑
    return roleMapper[role];
  }
}
