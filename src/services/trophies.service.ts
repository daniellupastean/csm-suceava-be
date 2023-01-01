import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trophy } from '../entities/trophy.entity';
import { PlayersService } from './players.service';
import { TeamsService } from './teams.service';

@Injectable()
export class TrophiesService {
  constructor(
    @InjectRepository(Trophy)
    private readonly trophiesRepository: Repository<Trophy>,
    private readonly playersService: PlayersService,
    private readonly teamsService: TeamsService,
  ) {}

  async create(
    title: string,
    category: string,
    date: Date,
    teamId: string,
    playerId: string,
  ) {
    const player = await this.playersService.findById(playerId);
    const team = await this.teamsService.findById(teamId);
    const trophy = this.trophiesRepository.create({
      title,
      category,
      date,
      player,
      team,
    });
    return await this.trophiesRepository.save(trophy);
  }

  async findById(id: string) {
    return await this.trophiesRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.trophiesRepository.find();
  }

  async deleteById(id: string) {
    const trophy = await this.findById(id);
    if (!trophy) return { message: 'Trophy not found' };
    return await this.trophiesRepository.delete(id);
  }
}
