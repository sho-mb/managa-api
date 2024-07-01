import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { Genres } from '../entity/genres.entity';

export class CreateMangaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  managaName!: string;

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

  @ApiProperty()
  @IsNotEmpty()
  genres!: Genres[];
}
