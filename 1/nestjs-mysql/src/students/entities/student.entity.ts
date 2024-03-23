import { Person } from 'src/entitys/person.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'students' })
export class Student extends Person {
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  birthday: Date;
}
