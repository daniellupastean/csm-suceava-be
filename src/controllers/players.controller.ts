import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { PlayersService } from '../services/players.service';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() body) {
    return await this.playersService.create(
      body.firstName,
      body.lastName,
      body.nationality,
      body.birthDate,
      body.height,
      body.description,
      body.teamId,
    );
  }

  @Get()
  async findAll() {
    return await this.playersService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.playersService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.playersService.deleteById(params.id);
  }
}
