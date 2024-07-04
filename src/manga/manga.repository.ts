// manga.repository.ts
import { Repository } from 'typeorm';
import { Manga } from './entity/manga.entity';
// import { CreateMangaDto } from './requests/create-manga.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMangaDto } from './requests/create-manga.dto';

@Injectable()
export class MangaRepository {
  constructor(
    @InjectRepository(Manga)
    private readonly mangaRepository: Repository<Manga>,
  ) {}

  async findAllWithGenres(): Promise<Manga[]> {
    return this.mangaRepository.find({ relations: ['genres'] });
  }

  async findOneById(id: string): Promise<Manga> {
    return this.mangaRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['genres'],
    });
  }

  async createNewManga(manga: CreateMangaDto): Promise<Manga> {
    const createManga = this.mangaRepository.create(manga);
    return this.mangaRepository.save(createManga);
  }
}
