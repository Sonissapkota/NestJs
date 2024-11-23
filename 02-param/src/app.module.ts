import { Module } from '@nestjs/common';
import { usersController } from './user.controller';

@Module({
  controllers: [usersController]
})
export class AppModule {}
