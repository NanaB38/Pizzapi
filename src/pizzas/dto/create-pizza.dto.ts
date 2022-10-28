/* eslint-disable prettier/prettier */
import { IsDefined, IsNotEmpty, MaxLength, Min } from "class-validator";
import { PizzaFlavor } from "../entities/pizza-flavour";

export class CreatePizzaDto {

@IsNotEmpty()
@MaxLength(100)
name: string;
@IsDefined()
flavor: PizzaFlavor;
speciality: boolean; // facultatif ici 
@IsDefined() 
@Min(0)
price: number;
end?: Date;
}