import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsLogModule } from 'src/modules/actionsLog/actionsLog.module';

@Module({
  imports: [
    ActionsLogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
