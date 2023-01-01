import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { TextSectionsService } from '../services/text-sections.service';

@ApiTags('text-sections')
@Controller('text-sections')
export class TextSectionsController {
  constructor(private readonly textSectionsService: TextSectionsService) {}

  @Post()
  async create(@Body() body) {
    return await this.textSectionsService.create(body.type, body.content);
  }

  @Get()
  async findAll() {
    return await this.textSectionsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.textSectionsService.findById(params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    return await this.textSectionsService.deleteById(params.id);
  }
}
