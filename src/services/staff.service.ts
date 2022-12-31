import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffMember } from '../entities/staff-member.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(StaffMember)
    private readonly staffRepository: Repository<StaffMember>,
  ) {}

  async create(firstName: string, lastName: string, role: string) {
    const staffMember = this.staffRepository.create({
      firstName,
      lastName,
      role,
    });
    return await this.staffRepository.save(staffMember);
  }

  async findById(id: string) {
    return await this.staffRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.staffRepository.find();
  }

  async deleteById(id: string) {
    const staffMember = await this.findById(id);
    if (!staffMember) return { message: 'Staff member not found' };
    return await this.staffRepository.delete(id);
  }
}
