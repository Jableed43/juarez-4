import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressUserService } from './address-user.service';
import { CreateAddressUserDto } from './dto/create-address-user.dto';
import { UpdateAddressUserDto } from './dto/update-address-user.dto';

@Controller('address-user')
export class AddressUserController {
  constructor(private readonly addressUserService: AddressUserService) {}

  @Post()
  create(@Body() createAddressUserDto: CreateAddressUserDto) {
    return this.addressUserService.create(createAddressUserDto);
  }

  @Get()
  findAll() {
    return this.addressUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressUserDto: UpdateAddressUserDto) {
    return this.addressUserService.update(+id, updateAddressUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressUserService.remove(+id);
  }
}
