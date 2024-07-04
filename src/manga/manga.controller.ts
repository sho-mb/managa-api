import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
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

  @Get(':id')
  async findOne(@Param() params: any): Promise<Manga> {
    return await this.mangaService.findOne(params.id);
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
