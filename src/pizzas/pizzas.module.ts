import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
//import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  // imports: [ConfigModule.forRoot()],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
