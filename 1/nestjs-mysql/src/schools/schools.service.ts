import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async create(createSchoolsDto: CreateSchoolsDto) {
    const school = await this.schoolsRepository.findOne({
      where: { schoolname: createSchoolsDto.schoolname },
    })
    if(school){
      return new HttpException('School already exists', HttpStatus.CONFLICT);
    }
    console.log(createSchoolsDto)
    const newSchool = this.schoolsRepository.create(createSchoolsDto);
    return this.schoolsRepository.save(newSchool)
  }

  findAll(): Promise<Schools[]> {
    return this.schoolsRepository.find()
  }

  async findOne(id: number): Promise<HttpException | Schools> {
    const school = await this.schoolsRepository.findOne({
      where: { id: id },
    })
    if(!school){
     return new HttpException("School does not exist", HttpStatus.NOT_FOUND)
    }
    return school
  }

  async update(id: number, updateSchoolDto: Partial<UpdateSchoolsDto>): Promise<HttpException | Schools> {
    const school = await this.schoolsRepository.findOne({where: {id: id}})
    if(!school){
      return new HttpException("School does not exist", HttpStatus.NOT_FOUND)
     }
     this.schoolsRepository.update(id, updateSchoolDto)
     return {...school, ...updateSchoolDto}
  }

  async remove(id: number): Promise<HttpException | Schools> {
    const school = await this.schoolsRepository.findOne({where: {id: id}})
    if(!school){
      return new HttpException('School does not exist', HttpStatus.NOT_FOUND)
    }
    this.schoolsRepository.delete(id)
    return school
  }
}
