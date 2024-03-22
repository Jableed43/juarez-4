import { MaxLength } from 'class-validator';

export class UpdateTeacherDto {

  @MaxLength(13)
  nombre?: string;

  @MaxLength(13)
  apellido?: string;
}

