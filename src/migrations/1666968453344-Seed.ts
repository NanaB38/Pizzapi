/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { PizzaFlavor } from "../pizzas/entities/pizza-flavour";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Pizza } from "../pizzas/entities/pizza.entity";

export class Seed1666968453344 implements MigrationInterface {

    public async up(run: QueryRunner): Promise<void> {
        await run.manager.save(run.manager.create<Pizza>(Pizza, {
            name: "Reine",
            flavor: PizzaFlavor.Tomato,
            price: 12
        }));
           await run.manager.save(run.manager.create<Pizza>(Pizza, {
            name: "4 Formaggi",
            flavor: PizzaFlavor.Cream,
            price: 13
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE * FROM currency");
    }

}
