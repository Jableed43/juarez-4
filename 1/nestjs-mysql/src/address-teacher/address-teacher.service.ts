import { Injectable } from '@nestjs/common';
import { CreateAddressTeacherDto } from './dto/create-address-teacher.dto';
import { UpdateAddressTeacherDto } from './dto/update-address-teacher.dto';

@Injectable()
export class AddressTeacherService {
  create(createAddressTeacherDto: CreateAddressTeacherDto) {
    return 'This action adds a new addressTeacher';
  }

  findAll() {
    return `This action returns all addressTeacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressTeacher`;
  }

  update(id: number, updateAddressTeacherDto: UpdateAddressTeacherDto) {
    return `This action updates a #${id} addressTeacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressTeacher`;
  }
}
