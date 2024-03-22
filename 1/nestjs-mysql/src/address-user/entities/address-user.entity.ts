import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'adressUser'})
export class AddressUser {
    @PrimaryGeneratedColumn()
    idAdressUser: number

    @Column()
    address: string

    @Column()
    idUser: number

    @Column()
    idCity: number
}
