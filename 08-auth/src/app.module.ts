import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entity/auth.entity';

@Module({
  imports: [
    AuthModule,
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'auth',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
