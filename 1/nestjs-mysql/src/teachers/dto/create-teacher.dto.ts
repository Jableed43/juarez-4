import { IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateTeacherDto {
  @MaxLength(13)
  @MinLength(3)
  name: string;

  @MaxLength(13)
  @MinLength(8)
  lastname: string;

  @MaxLength(45)
  @MinLength(3)
  address: string;

  @MaxLength(45)
  @MinLength(3)
  title: string;

  @IsNumber()
  cityId: number;
}
