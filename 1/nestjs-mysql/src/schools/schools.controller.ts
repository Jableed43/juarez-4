import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolsDto) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(+id);
  }
}
