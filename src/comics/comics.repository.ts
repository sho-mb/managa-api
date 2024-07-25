import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comics } from './entity/comics.entity';
import { Repository } from 'typeorm';
import { CreateComicsDto } from './requests/create-comics.dto';
import { Manga } from 'src/manga/entity/manga.entity';

@Injectable()
export class ComicsRepository {
  constructor(
    @InjectRepository(Comics)
    private readonly comicRepository: Repository<Comics>,
  ) {}

  async addNewComic(
    createComicsDto: CreateComicsDto,
    manga: Manga,
  ): Promise<Comics> {
    const { vol, comicId } = createComicsDto;
    const comic = new Comics();
    comic.vol = vol;
    comic.comicId = comicId;
    comic.manga = manga;
    return this.comicRepository.save(comic);
  }
}
