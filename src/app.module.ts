/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzasModule } from './pizzas/pizzas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'pizzapi',
      //entities: ['/**/*.entity.ts'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PizzasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}