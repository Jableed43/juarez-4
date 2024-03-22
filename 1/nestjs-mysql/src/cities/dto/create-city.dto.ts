import { MaxLength, MinLength } from "class-validator";

export class CreateCityDto {
  @MaxLength(30)
  @MinLength(3)
  nombre: string;
}
