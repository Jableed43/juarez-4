import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolsDto } from './dto/create-schools.dto';
import { UpdateSchoolsDto } from './dto/update-schools.dto';

@Controller('schools')
export class SchoolsController {
  constructor(private schoolsService: SchoolsService) {}

  @Post()
  create(@Body() createSchoolsDto: CreateSchoolsDto) {
    return this.schoolsService.create(createSchoolsDto);
  }

  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.schoolsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSchoolDto: Partial<UpdateSchoolsDto>) {
    return this.schoolsService.update(id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.schoolsService.remove(id);
  }
}
