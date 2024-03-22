import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'teachers'})
export class Teacher {
    @PrimaryGeneratedColumn()
    idTeacher: number

    @Column({ length: 13 })
    nombre: string

    @Column({ length: 13 })
    apellido: string
}