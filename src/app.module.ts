import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VersionedLoginController } from './controller/versioned-login.controller';
import { LoginController } from './controller/login.controller';
import { DataController } from './controller/data.controller';
import { MeasureController } from './controller/measure.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    LoginController,
    VersionedLoginController,
    DataController,
    MeasureController,
  ],
  providers: [AppService],
})
export class AppModule {}
