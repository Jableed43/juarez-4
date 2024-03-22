import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressTeacherService } from './address-teacher.service';
import { CreateAddressTeacherDto } from './dto/create-address-teacher.dto';
import { UpdateAddressTeacherDto } from './dto/update-address-teacher.dto';

@Controller('address-teacher')
export class AddressTeacherController {
  constructor(private readonly addressTeacherService: AddressTeacherService) {}

  @Post()
  create(@Body() createAddressTeacherDto: CreateAddressTeacherDto) {
    return this.addressTeacherService.create(createAddressTeacherDto);
  }

  @Get()
  findAll() {
    return this.addressTeacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressTeacherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressTeacherDto: UpdateAddressTeacherDto) {
    return this.addressTeacherService.update(+id, updateAddressTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressTeacherService.remove(+id);
  }
}
