// login.controller.ts
import * as MOCKED_RESPONSE from '../json/api-login.json';
import { Controller, Post } from '@nestjs/common';

@Controller()
export class LoginController {
  @Post('login')
  login() {
    // 在这里处理登录逻辑
    return MOCKED_RESPONSE;
  }
}
