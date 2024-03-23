import { Person } from 'src/entitys/person.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'teachers' })
export class Teacher extends Person {
  @Column({ length: 45 })
  title: string;
}
