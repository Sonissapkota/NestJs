import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [
    CrudModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'crud',
      entities: [],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
