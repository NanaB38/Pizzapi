/* eslint-disable prettier/prettier */
import { PizzaFlavor } from "../entities/pizza-flavour";

export class CreatePizzaDto {
name: string;
flavor: PizzaFlavor;
speciality: boolean;
price: number;
end?: Date;
}