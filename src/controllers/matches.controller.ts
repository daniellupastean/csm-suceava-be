import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { MatchesService } from '../services/matches.service';

@ApiTags('matches')
@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  async create(@Body() body) {
    return await this.matchesService.create(
      body.ourTeamId,
      body.opponentTeamName,
      body.startDate,
    );
  }

  @Get()
  async findAll() {
    return await this.matchesService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.matchesService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.matchesService.deleteById(params.id);
  }
}
