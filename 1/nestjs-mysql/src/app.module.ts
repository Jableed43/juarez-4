import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot({type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  port: 3301,
  database: 'empresa',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,}) ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
