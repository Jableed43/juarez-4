import { Module } from '@nestjs/common';
import { AddressUserService } from './address-user.service';
import { AddressUserController } from './address-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressUser } from './entities/address-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressUser])],
  controllers: [AddressUserController],
  providers: [AddressUserService],
})
export class AddressUserModule {}
