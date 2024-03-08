import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'schools' })
export class Schools {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  schoolname: string;

  @Column()
  address: string;
}