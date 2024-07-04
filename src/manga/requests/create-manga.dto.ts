import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CreateGenresDto } from '../../genres/requests/create-genres.dto';

export class CreateMangaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  mangaName!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  author!: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  topViewUrl!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  urlOfWeb!: string;

  @ApiProperty({ type: [CreateGenresDto] })
  @IsNotEmpty()
  @IsArray()
  genres!: CreateGenresDto[];
}
