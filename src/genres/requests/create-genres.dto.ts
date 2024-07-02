import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenresDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  genre: string;
}
