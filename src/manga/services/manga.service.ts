import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manga } from '../entity/manga.entity';
import { Repository } from 'typeorm';
import { CreateMangaDto } from '../requests/create-manga.dto';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(Manga)
    private mangasRepository: Repository<Manga>,
  ) {}

  async findAll(): Promise<Manga[]> {
    return this.mangasRepository.find();
  }

  async create(manga: CreateMangaDto): Promise<Manga> {
    const createManga = this.mangasRepository.create(manga);
    return this.mangasRepository.save(createManga);
  }
}
