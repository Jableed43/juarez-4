import { MaxLength, MinLength } from "class-validator";

export class CreateTeacherDto {
  @MaxLength(13)
  @MinLength(3)
  nombre: string;

  @MaxLength(13)
  @MinLength(8)
  apellido: string;
}
