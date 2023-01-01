import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamsRepository: Repository<Team>,
  ) {}

  async create(category: string) {
    const team = this.teamsRepository.create({
      category,
    });
    return await this.teamsRepository.save(team);
  }

  async findById(id: string) {
    return await this.teamsRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.teamsRepository.find();
  }

  async deleteById(id: string) {
    const team = await this.findById(id);
    if (!team) return { message: 'Team not found' };
    return await this.teamsRepository.delete(id);
  }
}
