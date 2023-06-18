import { Module } from '@nestjs/common';
import { BussinessService } from './bussiness.service';
import { BussinessController } from './bussiness.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bussiness } from './entities/bussiness.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bussiness])],
  controllers: [BussinessController],
  providers: [BussinessService],
})
export class BussinessModule {}
