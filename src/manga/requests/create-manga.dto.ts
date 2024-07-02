import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreateGenresDto } from './create-genres.dto';

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
  @IsUrl()
  @IsOptional()
  topViewUrl!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty()
  @IsString()
  @IsUrl()
  @IsOptional()
  urlOfWeb!: string;

  @ApiProperty({ type: [CreateGenresDto] })
  @IsNotEmpty()
  @IsArray()
  genres!: CreateGenresDto[];
}
