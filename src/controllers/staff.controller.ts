import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { StaffService } from '../services/staff.service';

@ApiTags('staff')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  async create(@Body() body) {
    return await this.staffService.create(
      body.firstName,
      body.lastName,
      body.role,
    );
  }

  @Get()
  async findAll() {
    return await this.staffService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.staffService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.staffService.deleteById(params.id);
  }
}
