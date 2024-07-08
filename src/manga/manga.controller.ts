import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MangaService } from './services/manga.service';
import { Manga } from './entity/manga.entity';
import { CreateMangaDto } from './requests/create-manga.dto';
import { UpdateMangaDto } from './requests/update-mange.dto';

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

  @Put(':id')
  async updateMange(
    @Param() params: any,
    @Body() updateMangaDto: UpdateMangaDto,
  ): Promise<void | Error> {
    try {
      await this.mangaService.update(params.id, updateMangaDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteOne(@Param() params: any): Promise<void | Error> {
    try {
      const target = await this.mangaService.findOne(params.id);
      if (!target) {
        throw new HttpException('Item not exist', HttpStatus.BAD_REQUEST);
      }
      await this.mangaService.deleteOne(params.id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
