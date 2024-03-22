import { Module } from '@nestjs/common';
import { UserClassService } from './user-class.service';
import { UserClassController } from './user-class.controller';
import { UserClass } from './entities/user-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserClass])],
  controllers: [UserClassController],
  providers: [UserClassService],
})
export class UserClassModule {}
