import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "products"})
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location_name: string;

    @Column()
    catalog_name: string;

    @Column()
    color: string;

    @Column()
    size: number;

    @Column()
    quantity: number;

    @Column()
    del_flg: number;

}
