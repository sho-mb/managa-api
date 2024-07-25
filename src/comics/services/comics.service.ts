import { Inject, Injectable } from '@nestjs/common';
import { ComicsRepository } from '../comics.repository';
import { CreateComicsDto } from '../requests/create-comics.dto';
import { Manga } from 'src/manga/entity/manga.entity';

@Injectable()
export class ComicsService {
  constructor(
    @Inject(ComicsRepository)
    private readonly comicsRepository: ComicsRepository,
  ) {}

  async create(comic: CreateComicsDto, manga: Manga) {
    return this.comicsRepository.addNewComic(comic, manga);
  }
}
