import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller';
import { MangaService } from './services/manga.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from './entity/manga.entity';
import { Genres } from './entity/genres.entity';
import { MangaRepository } from './manga.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Manga, Genres])],
  controllers: [MangaController],
  providers: [MangaService, MangaRepository],
})
export class MangaModule {}
