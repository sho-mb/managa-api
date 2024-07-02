import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Manga } from '../entity/manga.entity';

export class CreateGenresDto {
  id: string;
  manga: Manga;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  genre: string;
}
