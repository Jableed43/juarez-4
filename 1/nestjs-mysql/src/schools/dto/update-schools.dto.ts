import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolsDto } from './create-schools.dto';

export class UpdateSchoolsDto extends PartialType(CreateSchoolsDto) {}
