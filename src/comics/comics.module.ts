import { Module } from '@nestjs/common';
import { Comics } from './entity/comics.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComicsController } from './comics.controller';
import { ComicsService } from './services/comics.service';
import { ComicsRepository } from './comics.repository';
import { MangaRepository } from 'src/manga/manga.repository';
import { Manga } from 'src/manga/entity/manga.entity';
import { MangaService } from 'src/manga/services/manga.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comics, Manga])],
  controllers: [ComicsController],
  providers: [ComicsService, ComicsRepository, MangaService, MangaRepository],
})
export class ComicsModule {}
