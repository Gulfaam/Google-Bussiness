import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { BussinessService } from './bussiness.service';
import { CreateBussinessDto } from './dto/create-bussiness.dto';
import { SearchBussinessDto } from './dto/search-bussiness.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('bussiness')
export class BussinessController {
  constructor(private readonly bussinessService: BussinessService) {}

  @Post()
  async create(@Body() createBussinessDto: CreateBussinessDto) {
    return {
      message: 'success',
      status: 201,
      data: await this.bussinessService.create(createBussinessDto),
    };
  }

  @ApiQuery({ name: 'id' })
  @Get('aggregate-and-list-reviews')
  async findOne(@Query() query: SearchBussinessDto) {
    return {
      message: 'success',
      status: 200,
      data: await this.bussinessService.findOne(query),
    };
  }
}
