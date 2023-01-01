import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerPosition } from '../entities/player-position.entity';
import { PlayersService } from './players.service';
import { TeamsService } from './teams.service';

@Injectable()
export class PlayerPositionsService {
  constructor(
    @InjectRepository(PlayerPosition)
    private readonly playerPositionsRepository: Repository<PlayerPosition>,
    private readonly playersService: PlayersService,
    private readonly teamsService: TeamsService,
  ) {}

  async create(
    playerId: string,
    teamId: string,
    position: string,
    startDate: Date,
    endDate: Date,
  ) {
    const player = await this.playersService.findById(playerId);
    const team = await this.teamsService.findById(teamId);
    const playerPosition = this.playerPositionsRepository.create({
      player,
      team,
      position,
      startDate,
      endDate,
    });
    return await this.playerPositionsRepository.save(playerPosition);
  }

  async findById(id: string) {
    return await this.playerPositionsRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.playerPositionsRepository.find();
  }

  async deleteById(id: string) {
    const playerPosition = await this.findById(id);
    if (!playerPosition) return { message: 'Player position not found' };
    return await this.playerPositionsRepository.delete(id);
  }
}
