// versioned-login.controller.ts
import { Body, Controller, Post, Param } from '@nestjs/common';
import * as CTI_RESPONSE from '../json/user-login-cti.json';
import * as ES_RESPONSE from '../json/user-login-es.json';
import * as ESSO_RESPONSE from '../json/user-login-esso.json';
import * as USR_RESPONSE from '../json/user-login-usr.json';

const roleMapper = {
  es: ES_RESPONSE,
  esso: ESSO_RESPONSE,
  usr: USR_RESPONSE,
  cti: CTI_RESPONSE,
};

@Controller()
export class VersionedLoginController {
  @Post(':ver/:so/:subsid/login')
  login(
    @Param('ver') ver: string,
    @Param('so') so: string,
    @Param('subsid') subsid: string,
    @Body() body: { token: string; name: string; site: string },
  ) {
    const nameData = JSON.parse(body.name);
    return roleMapper[nameData.role];
  }
}
