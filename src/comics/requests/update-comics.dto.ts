import { PartialType } from '@nestjs/swagger';
import { CreateComicsDto } from './create-comics.dto';

export class UpdateComicsDto extends PartialType(CreateComicsDto) {}
