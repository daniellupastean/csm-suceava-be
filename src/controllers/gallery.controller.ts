import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GalleryService } from '../services/gallery.service';

@ApiTags('gallery')
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  async findAll() {
    return await this.galleryService.findAll();
  }

  @Post()
  async save(@Body('url') url: string) {
    return await this.galleryService.save(url);
  }
}
