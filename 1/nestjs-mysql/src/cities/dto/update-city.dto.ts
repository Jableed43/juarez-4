import { MaxLength, MinLength } from "class-validator";

export class UpdateCityDto {
    
        @MaxLength(30)
        @MinLength(3)
        nombre: string;
      
}
