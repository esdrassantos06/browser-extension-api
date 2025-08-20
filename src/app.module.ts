import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ExtensionsModule } from './extensions/extensions.module';

@Module({
  imports: [DatabaseModule, ExtensionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
