import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(@InjectRepository(City) private cityRepository: Repository<City>){}
  
  create(city: CreateCityDto) {
    const newCity = this.cityRepository.create(city)
    return this.cityRepository.save(newCity)
  }

  async findAll() {
    const cities = await this.cityRepository.find()
    return cities
  }

  async findOne(id: number) {
    const cityFound = await this.cityRepository.findOne({where: {id}})
    if(!cityFound){
      return new HttpException('City does not exist', HttpStatus.NOT_FOUND)
    }
    return cityFound
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    const cityFound = await this.cityRepository.findOne({where: {id}})
    if(!cityFound){
      return new HttpException('City does not exist', HttpStatus.NOT_FOUND)
    }
    this.cityRepository.update(id, updateCityDto)
    return {...cityFound, ...updateCityDto}
  }

  async remove(id: number) {
    const cityFound = await this.cityRepository.findOne({where: {id}})
    if(!cityFound){
      return new HttpException('City does not exist', HttpStatus.NOT_FOUND)
    }
    this.cityRepository.delete({id})
    return cityFound
  }
}
