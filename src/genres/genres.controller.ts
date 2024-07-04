import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { GenresService } from './services/genres.service';
import { Genres } from './entity/genres.entity';
import { CreateGenresDto } from './requests/create-genres.dto';

@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  async findAll(): Promise<Genres[]> {
    return await this.genresService.findAll();
  }

  @Post()
  async createGenre(
    @Body() createGenresDto: CreateGenresDto,
  ): Promise<Genres | Error> {
    try {
      return await this.genresService.create(createGenresDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
