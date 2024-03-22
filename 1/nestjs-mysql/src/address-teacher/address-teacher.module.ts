import { Module } from '@nestjs/common';
import { AddressTeacherService } from './address-teacher.service';
import { AddressTeacherController } from './address-teacher.controller';
import { AddressTeacher } from './entities/address-teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AddressTeacher])],
  controllers: [AddressTeacherController],
  providers: [AddressTeacherService],
})
export class AddressTeacherModule {}
