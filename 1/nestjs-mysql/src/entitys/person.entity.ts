import { City } from 'src/cities/entities/city.entity';
import {
  BaseEntity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 13 })
  name: string;

  @Column({ length: 13 })
  lastname: string;

  @Column({ length: 45 })
  address: string;

  @ManyToOne(() => City, { eager: true }) // eager loading for immediate retrieval
  @JoinColumn({ name: 'id' }) // Assuming 'id' is the foreign key column in Person table
  cityId: number;
}
