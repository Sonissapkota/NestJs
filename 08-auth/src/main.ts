import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthMiddleware } from './auth/jwt-auth.middleware';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt-strategy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const jwtMiddleware = app.get(JwtAuthMiddleware);
  app.use(jwtMiddleware.use.bind(jwtMiddleware))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
