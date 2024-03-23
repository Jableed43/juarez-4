import { IsDateString, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateStudentDto {
  @MaxLength(13)
  @MinLength(3)
  name: string;

  @MaxLength(13)
  @MinLength(8)
  lastname: string;

  @MaxLength(45)
  @MinLength(3)
  address: string;

  @IsDateString()
  birthday: Date;

  @IsNumber()
  cityId: number;
}
