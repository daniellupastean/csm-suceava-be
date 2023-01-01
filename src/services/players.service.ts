import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { TeamsService } from './teams.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playersRepository: Repository<Player>,
    private readonly teamsService: TeamsService,
  ) {}

  async create(
    firstName: string,
    lastName: string,
    nationality: string,
    birthDate: Date,
    height: string,
    description: string,
    teamId: string,
  ) {
    const team = await this.teamsService.findById(teamId);
    if (!team) return { message: 'Team not found' };

    const player = this.playersRepository.create({
      firstName,
      lastName,
      nationality,
      birthDate,
      height,
      description,
      team,
    });
    return await this.playersRepository.save(player);
  }

  async findById(id: string) {
    return await this.playersRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.playersRepository.find();
  }

  async deleteById(id: string) {
    const player = await this.findById(id);
    if (!player) return { message: 'Player not found' };
    return await this.playersRepository.delete(id);
  }
}
