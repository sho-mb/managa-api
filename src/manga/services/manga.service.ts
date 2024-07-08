import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Manga } from '../entity/manga.entity';
import { MangaRepository } from '../manga.repository';
import { CreateMangaDto } from '../requests/create-manga.dto';
import { UpdateMangaDto } from '../requests/update-mange.dto';

@Injectable()
export class MangaService {
  constructor(
    @Inject(MangaRepository) private readonly mangaRepository: MangaRepository,
  ) {}

  async findAll(): Promise<Manga[]> {
    return this.mangaRepository.findAllWithGenres();
  }

  async findOne(id: string): Promise<Manga> {
    return this.mangaRepository.findOneById(id);
  }

  async create(manga: CreateMangaDto): Promise<Manga> {
    return this.mangaRepository.createNewManga(manga);
  }

  async update(id: string, updateMangaDto: UpdateMangaDto): Promise<Manga> {
    const manga = await this.mangaRepository.findOneById(id);
    if (!manga) {
      throw new HttpException('Item not exist', HttpStatus.BAD_REQUEST);
    }

    Object.assign(manga, updateMangaDto);

    return this.mangaRepository.updateManga(manga);
  }

  async deleteOne(id: string): Promise<void> {
    this.mangaRepository.deleteOneById(id);
  }
}
