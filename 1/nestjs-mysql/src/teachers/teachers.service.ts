import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teachers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  async create(teacher: CreateTeacherDto) {
    const newTeacher = this.teacherRepository.create(teacher);

    return await this.teacherRepository.save(newTeacher);
  }

  findAll() {
    return this.teacherRepository.find();
  }

  async findOne(id: number) {
    const teacherFound = await this.teacherRepository.findOne({
      where: { id },
    });
    if (!teacherFound) {
      return new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    }
    return teacherFound;
  }

  async update(id: number, teacher: UpdateTeacherDto) {
    const teacherFound = await this.teacherRepository.findOne({
      where: { id },
    });
    console.log('teacherFound', teacherFound);
    console.log('teacher', teacher);
    if (!teacherFound) {
      return new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    }

    await this.teacherRepository.update(id, teacher);
    return { ...teacherFound, ...teacher };
  }

  async remove(id: number) {
    const teacherFound = await this.teacherRepository.findOne({
      where: { id: id },
    });
    if (!teacherFound) {
      return new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    }
    const teacherDelete = await this.teacherRepository.delete(id);
    if (teacherDelete.affected === 0) {
      return new HttpException('Teacher cant be deleted', HttpStatus.NOT_FOUND);
    }
    return teacherFound;
  }
}
