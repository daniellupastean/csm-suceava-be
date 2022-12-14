import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { SponsorsService } from '../services/sponsors.service';
import { StaffService } from '../services/staff.service';

@ApiTags('sponsors')
@Controller('sponsors')
export class SponsorsController {
  constructor(private readonly sponsorsService: SponsorsService) {}

  @Post()
  async create(@Body() body) {
    return await this.sponsorsService.create(
      body.name,
      body.link,
      body.startDate,
    );
  }

  @Get()
  async findAll() {
    return await this.sponsorsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.sponsorsService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.sponsorsService.deleteById(params.id);
  }
}
