import { MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(13)
  @MinLength(3)
  username: string;

  @MaxLength(13)
  @MinLength(8)
  password: string;
}
