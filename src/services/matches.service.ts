import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../entities/match.entity';
import { StaffMember } from '../entities/staff-member.entity';
import { TeamsService } from './teams.service';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private readonly matchesRepository: Repository<Match>,
    private readonly teamsService: TeamsService,
  ) {}

  async create(ourTeamId: string, opponentTeamName: string, startDate: Date) {
    const ourTeam = await this.teamsService.findById(ourTeamId);
    if (!ourTeam) return { message: 'Team not found' };
    const match = this.matchesRepository.create({
      ourTeam,
      opponentTeamName,
      startDate,
    });
    return await this.matchesRepository.save(match);
  }

  async findById(id: string) {
    return await this.matchesRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.matchesRepository.find();
  }

  async deleteById(id: string) {
    const match = await this.findById(id);
    if (!match) return { message: 'Match not found' };
    return await this.matchesRepository.delete(id);
  }
}
