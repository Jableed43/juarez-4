import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'classes' })
export class Class {
  @PrimaryGeneratedColumn()
  idClass: number;

  @Column()
  nombre: string;

  @Column()
  idSchool: number;

  @Column()
  id: number;
}
