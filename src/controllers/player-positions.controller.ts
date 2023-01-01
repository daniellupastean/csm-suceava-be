import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { PlayerPositionsService } from '../services/player-positions.service';

@ApiTags('player-positions')
@Controller('player-positions')
export class PlayerPositionsController {
  constructor(
    private readonly playerPositionsService: PlayerPositionsService,
  ) {}

  @Post()
  async create(@Body() body) {
    return await this.playerPositionsService.create(
      body.playerId,
      body.teamId,
      body.position,
      body.startDate,
      body.endDate,
    );
  }

  @Get()
  async findAll() {
    return await this.playerPositionsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.playerPositionsService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.playerPositionsService.deleteById(params.id);
  }
}
