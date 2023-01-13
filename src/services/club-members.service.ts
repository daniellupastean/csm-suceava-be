import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubMember } from 'src/entities/club-member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubMembersService {
  constructor(
    @InjectRepository(ClubMember)
    private readonly clubMembersRepository: Repository<ClubMember>,
  ) {}

  async create(
    fullName: string,
    image: string,
    nationality: string,
    birthDate: string,
    height: string,
    position: string,
    type: string,
  ) {
    const player = this.clubMembersRepository.create({
      fullName,
      image,
      nationality,
      birthDate,
      height,
      position,
      type,
    });

    return await this.clubMembersRepository.save(player);
  }

  async findById(id: string) {
    return await this.clubMembersRepository.findOneBy({ id });
  }

  async findByType(type: string) {
    return await this.clubMembersRepository.findBy({ type });
  }

  async findAll() {
    return await this.clubMembersRepository.find();
  }

  async deleteById(id: string) {
    const player = await this.findById(id);
    if (!player) return { message: 'Club member not found' };
    return await this.clubMembersRepository.delete(id);
  }
}
