import { MaxLength } from 'class-validator';

export class UpdateUserDto {
  @MaxLength(13)
  username?: string;
  @MaxLength(13)
  password?: string;
}
