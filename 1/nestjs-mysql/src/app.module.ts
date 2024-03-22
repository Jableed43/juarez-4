import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolsModule } from './schools/schools.module';
import { join } from 'path';
import { TeachersModule } from './teachers/teachers.module';
import { CitiesModule } from './cities/cities.module';
import { ClassesModule } from './classes/classes.module';
import { AddressTeacherModule } from './address-teacher/address-teacher.module';
import { AddressUserModule } from './address-user/address-user.module';
import { UserClassModule } from './user-class/user-class.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3300,
      database: 'world_x',
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    UsersModule,
    SchoolsModule,
    TeachersModule,
    CitiesModule,
    ClassesModule,
    AddressTeacherModule,
    AddressUserModule,
    UserClassModule,
    AttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
