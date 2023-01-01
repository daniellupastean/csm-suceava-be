import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { TrophiesService } from '../services/trophies.service';

@ApiTags('trophies')
@Controller('trophies')
export class TrophiesController {
  constructor(private readonly trophiesService: TrophiesService) {}

  @Post()
  async create(@Body() body) {
    return await this.trophiesService.create(
      body.title,
      body.category,
      body.date,
      body.teamId,
      body.playerId,
    );
  }

  @Get()
  async findAll() {
    return await this.trophiesService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.trophiesService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.trophiesService.deleteById(params.id);
  }
}
