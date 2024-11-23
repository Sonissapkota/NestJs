import { Module } from '@nestjs/common';
import { usersController } from './users.controller';

@Module({
  controllers: [usersController]
})
export class AppModule {}
