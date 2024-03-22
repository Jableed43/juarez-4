import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressUserDto } from './create-address-user.dto';

export class UpdateAddressUserDto extends PartialType(CreateAddressUserDto) {}
