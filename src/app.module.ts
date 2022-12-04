import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './orm.config';
import { GalleryImage } from './entities/gallery-image.entity';
import { GalleryController } from './controllers/gallery.controller';
import { GalleryService } from './services/gallery.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([GalleryImage]),
  ],
  controllers: [AppController, GalleryController],
  providers: [AppService, GalleryService],
})
export class AppModule {}
