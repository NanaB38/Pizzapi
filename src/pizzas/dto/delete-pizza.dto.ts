/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaDto } from './create-pizza.dto';

export class DeleteResult extends PartialType(CreatePizzaDto) {}