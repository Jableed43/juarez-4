import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<HttpException | User> {
    console.log(newUser);
    console.log('controller createUser');
    return this.usersService.createUser(newUser);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Put(':id')
  updateUser(
    @Body() user: Partial<UpdateUserDto>,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HttpException | User> {
    return this.usersService.updateUser(id, user);
  }

  @Get(':id')
  getUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HttpException | User> {
    return this.usersService.getUser(id);
  }

  @Delete(':id')
  deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HttpException | User> {
    return this.usersService.deleteUser(id);
  }
}
