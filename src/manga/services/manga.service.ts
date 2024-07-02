import { Inject, Injectable } from '@nestjs/common';
import { Manga } from '../entity/manga.entity';
// import { CreateMangaDto } from '../requests/create-manga.dto';
import { MangaRepository } from '../manga.repository';
import { CreateMangaDto } from '../requests/create-manga.dto';

@Injectable()
export class MangaService {
  constructor(
    @Inject(MangaRepository) private readonly mangaRepository: MangaRepository,
  ) {}

  async findAll(): Promise<Manga[]> {
    return this.mangaRepository.findAllWithGenres();
  }

  async create(manga: CreateMangaDto): Promise<Manga> {
    return this.mangaRepository.createNewManga(manga);
  }
}
