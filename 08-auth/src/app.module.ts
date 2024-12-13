import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entity/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthMiddleware } from './auth/jwt-auth.middleware';

@Module({
  imports: [
    AuthModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'auth',
      entities: [User],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'secret-key',
      signOptions: {expiresIn: '1h'}
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(JwtAuthMiddleware).forRoutes("auth/users")
  }
}
