import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async create(student: CreateStudentDto) {
    const newStudent = this.studentRepository.create(student);
    return await this.studentRepository.save(newStudent);
  }

  findAll() {
    return this.studentRepository.find();
  }

  async findOne(id: number) {
    const studentFound = await this.studentRepository.findOne({
      where: { id },
    });
    if (!studentFound) {
      return new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return studentFound;
  }

  async update(id: number, student: UpdateStudentDto) {
    const studentFound = await this.studentRepository.findOne({
      where: { id },
    });
    if (!studentFound) {
      return new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }

    await this.studentRepository.update(id, student);
    return { ...studentFound, ...student };
  }

  async remove(id: number) {
    const studentFound = await this.studentRepository.findOne({
      where: { id: id },
    });
    if (!studentFound) {
      return new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    const studentDelete = await this.studentRepository.delete(id);
    if (studentDelete.affected === 0) {
      return new HttpException('Student cant be deleted', HttpStatus.NOT_FOUND);
    }
    return studentFound;
  }
}
