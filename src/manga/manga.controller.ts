import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
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
  async createManga(
    @Body() createMangaDto: CreateMangaDto,
  ): Promise<void | Error> {
    try {
      await this.mangaService.create(createMangaDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
