import { Module } from '@nestjs/common';
import { usersController } from './user.controller';
import { accountController } from './account.controller'

@Module({
  controllers: [usersController, accountController]
})
export class AppModule {}
