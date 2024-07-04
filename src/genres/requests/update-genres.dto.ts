import { PartialType } from '@nestjs/swagger';
import { CreateGenresDto } from './create-genres.dto';

export class UpdateGenresDto extends PartialType(CreateGenresDto) {}
