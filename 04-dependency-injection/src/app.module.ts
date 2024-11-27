import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { AppService } from './users.service';

@Module({
  imports: [],
  controllers: [usersController],
  providers: [AppService],
})
export class AppModule {}
