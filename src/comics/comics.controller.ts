import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComicsService } from './services/comics.service';
import { CreateComicsDto } from './requests/create-comics.dto';
import { MangaService } from 'src/manga/services/manga.service';

@Controller('comics')
export class ComicsController {
  constructor(
    private readonly comicsService: ComicsService,
    private readonly mangaService: MangaService,
  ) {}

  @Get()
  async get() {
    return 'hello';
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
      await this.comicsService.create(createComicsDto, manga);
    } catch (error) {
      throw new Error(`Failed to add comic: ${error.message}`);
    }
  }
}
