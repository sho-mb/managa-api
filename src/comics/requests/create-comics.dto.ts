import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComicsDto {
  @ApiProperty()
  comicId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  vol: number;
}
