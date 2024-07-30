import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComicsService } from './services/comics.service';
import { CreateComicsDto } from './requests/create-comics.dto';
import { MangaService } from 'src/manga/services/manga.service';
import { Comics } from './entity/comics.entity';

@Controller('comics')
export class ComicsController {
  constructor(
    private readonly comicsService: ComicsService,
    private readonly mangaService: MangaService,
  ) {}

  @Get(':vol')
  async GetOneByVol(@Param() params: any): Promise<Comics> {
    try {
      const comics = await this.comicsService.getOneByVol(params.vol);
      return comics;
    } catch (e) {
      throw new Error(`Failed to add comic: ${e.message}`);
    }
  }

  @Post(':id')
  async AddNewComic(
    @Param() params: any,
    @Body() createComicsDto: CreateComicsDto,
  ): Promise<void | Error> {
    try {
      const manga = await this.mangaService.findOne(params.id);
      if (!manga) {
        throw new Error(`Manga with ID ${params.id} not found`);
      }
      const comic = await this.comicsService.getOneByVol(createComicsDto.vol);
      if (comic) {
        throw new Error(`Comic vol: ${comic.vol} is exist`);
      }
      await this.comicsService.create(createComicsDto, manga);
    } catch (error) {
      throw new Error(`Failed to add comic: ${error.message}`);
    }
  }
}
