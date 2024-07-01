import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller';
import { MangaService } from './services/manga.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from './entity/manga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manga])],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
