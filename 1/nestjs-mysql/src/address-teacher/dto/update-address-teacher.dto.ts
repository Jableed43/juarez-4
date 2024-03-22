import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressTeacherDto } from './create-address-teacher.dto';

export class UpdateAddressTeacherDto extends PartialType(CreateAddressTeacherDto) {}
