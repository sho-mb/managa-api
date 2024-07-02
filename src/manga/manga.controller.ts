import { Body, Controller, Get, Post } from '@nestjs/common';
import { MangaService } from './services/manga.service';
import { Manga } from './entity/manga.entity';
import { CreateMangaDto } from './requests/create-manga.dto';

@Controller('manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @Get()
  async findAll(): Promise<Manga[]> {
    return await this.mangaService.findAll();
  }

  @Post()
  async createManga(@Body() createMangaDto: CreateMangaDto): Promise<void> {
    await this.mangaService.create(createMangaDto);
  }
}
