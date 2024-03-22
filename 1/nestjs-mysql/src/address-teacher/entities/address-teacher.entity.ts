import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'addressTeacher'})
export class AddressTeacher {
    @PrimaryGeneratedColumn()
    idAddressTeacher: number

    @Column()
    address: string

    @Column()
    idTeacher: number

    @Column()
    idCity: number
}

