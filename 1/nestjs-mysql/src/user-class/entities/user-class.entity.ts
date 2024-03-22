import { Column, Entity } from "typeorm";

@Entity({name: 'userClass'})
export class UserClass {
    @Column()
    idClase: number

    @Column()
    idUser: number
}
