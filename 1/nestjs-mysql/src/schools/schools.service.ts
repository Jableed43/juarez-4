import { Injectable } from '@nestjs/common';
import { CreateSchoolsDto } from './dto/create-schools.dto';
import { UpdateSchoolsDto } from './dto/update-schools.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schools } from './entities/schools.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(Schools) private schoolsRepository: Repository<Schools>,
  ) {}

  create(createSchoolsDto: CreateSchoolsDto) {
    const newSchool = this.schoolsRepository.create(createSchoolsDto);
    return this.schoolsRepository.save(newSchool)
  }

  findAll() {
    return `This action returns all schools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolsDto: UpdateSchoolsDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
