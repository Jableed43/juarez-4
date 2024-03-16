import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<HttpException | User> {
    const userFound = await this.userRepository.findOne({
      where: { username: user.username },
    });
    if (userFound) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getUsers(): Promise<
    { id: number; username: string; createdAt: Date }[]
  > {
    const users = await this.userRepository.find();
    let result = [];
    if (users.length) {
      result = users.map((d) => ({
        id: d.id,
        username: d.username,
        createdAt: d.createdAt,
      }));
    }
    return result;
  }

  async updateUser(
    id: number,
    userData: UpdateUserDto,
  ): Promise<HttpException | User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    this.userRepository.update(id, userData);
    return { ...user, ...userData };
  }

  async getUser(id: number): Promise<HttpException | User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      return new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async deleteUser(id: number): Promise<HttpException | User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      return new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    this.userRepository.delete({ id: id });
    return user;
  }
}
