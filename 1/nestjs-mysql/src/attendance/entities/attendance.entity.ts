import { Column, Entity } from "typeorm";

@Entity({name: 'attendance'})
export class Attendance {
    @Column()
    idClass: number

    @Column()
    idUser:number

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    classDate: Date
}

