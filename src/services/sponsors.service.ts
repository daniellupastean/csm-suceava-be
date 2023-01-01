import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sponsor } from '../entities/sponsor.entity';

@Injectable()
export class SponsorsService {
  constructor(
    @InjectRepository(Sponsor)
    private readonly sponsorsService: Repository<Sponsor>,
  ) {}

  async create(name: string, link: string, startDate: Date) {
    const sponsor = this.sponsorsService.create({
      name,
      link,
      startDate,
    });
    return await this.sponsorsService.save(sponsor);
  }

  async findById(id: string) {
    return await this.sponsorsService.findOneBy({ id });
  }

  async findAll() {
    return await this.sponsorsService.find();
  }

  async deleteById(id: string) {
    const sponsor = await this.findById(id);
    if (!sponsor) return { message: 'Sponsor not found' };
    return await this.sponsorsService.delete(id);
  }
}
