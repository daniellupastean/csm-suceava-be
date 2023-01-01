import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { TeamsService } from '../services/teams.service';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() body) {
    return await this.teamsService.create(body.category);
  }

  @Get()
  async findAll() {
    return await this.teamsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.teamsService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.teamsService.deleteById(params.id);
  }
}
