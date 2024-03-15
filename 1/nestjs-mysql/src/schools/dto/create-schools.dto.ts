import { MaxLength } from "class-validator";

export class CreateSchoolsDto {
  @MaxLength(40)
    schoolname: string;
  
    @MaxLength(40)
    address: string;
}
