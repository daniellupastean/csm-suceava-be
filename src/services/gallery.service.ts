import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GalleryImage } from '../entities/gallery-image.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(GalleryImage)
    private readonly galleryImagesRepository: Repository<GalleryImage>,
  ) {}

  async save(url: string) {
    const galleryImage = this.galleryImagesRepository.create({
      url,
    });
    await this.galleryImagesRepository.save(galleryImage);

    delete galleryImage.createdAt;
    delete galleryImage.updatedAt;

    return galleryImage;
  }

  async findAll() {
    let galleryImages = await this.galleryImagesRepository.find();
    galleryImages = galleryImages.map((image) => {
      delete image.createdAt;
      delete image.updatedAt;
      return image;
    });
    return galleryImages;
  }
}
