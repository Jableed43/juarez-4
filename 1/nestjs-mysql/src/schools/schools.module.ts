import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { Schools } from './entities/schools.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Schools])],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}
