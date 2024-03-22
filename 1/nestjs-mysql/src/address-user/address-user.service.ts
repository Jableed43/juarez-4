import { Injectable } from '@nestjs/common';
import { CreateAddressUserDto } from './dto/create-address-user.dto';
import { UpdateAddressUserDto } from './dto/update-address-user.dto';

@Injectable()
export class AddressUserService {
  create(createAddressUserDto: CreateAddressUserDto) {
    return 'This action adds a new addressUser';
  }

  findAll() {
    return `This action returns all addressUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressUser`;
  }

  update(id: number, updateAddressUserDto: UpdateAddressUserDto) {
    return `This action updates a #${id} addressUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressUser`;
  }
}
