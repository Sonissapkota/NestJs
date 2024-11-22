import { Module } from '@nestjs/common';
import { UsersController} from './users.controller';
import { AccountController } from './profile.controller';

@Module({
  controllers: [UsersController, AccountController],
})
export class AppModule {}
