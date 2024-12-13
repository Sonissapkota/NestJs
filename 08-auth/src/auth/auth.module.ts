import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/auth.entity';
import { JwtStrategy } from './jwt-strategy';
import { JwtAuthMiddleware } from './jwt-auth.middleware';


@Module({
  providers: [AuthService, JwtStrategy, JwtAuthMiddleware],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'secret-key',
      signOptions: {expiresIn: '1h'}
    })
  ]
})
export class AuthModule {}
