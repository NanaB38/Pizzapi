/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
//import { DeleteResult } from './dto/delete-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PizzasService {

constructor(@InjectRepository(Pizza) private data: Repository<Pizza>) {}

  create(dto : CreatePizzaDto): Promise<Pizza> {
    return this.data.save(dto);
  }

  findAll(): Promise<Pizza[]> {
    return this.data.find();
  }

  findOne(id: number): Promise<Pizza> {
    return this.data.findOneByOrFail({id}).catch(() => {
      throw new NotFoundException(id);
    });
  }

  async update(id: number, dto: UpdatePizzaDto): Promise<Pizza> {
    const done = await this.data.update(id, dto);
    if (done.affected != 1) {
    throw new NotFoundException(id)
    }
    return this.findOne(id);
  }

  // async remove(id: number): Promise<void>  {
  //   const done : DeleteResult = await this.data.delete(id);
  //   if (done.affected != 1) {
  //   throw new NotFoundException(id);
  //   }
  // }
}