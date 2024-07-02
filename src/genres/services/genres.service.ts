import { Inject, Injectable } from '@nestjs/common';
import { GenresRepository } from '../genres.repository';
import { Genres } from '../entity/genres.entity';
import { CreateGenresDto } from '../requests/create-genres.dto';

@Injectable()
export class GenresService {
  constructor(
    @Inject(GenresRepository) private readonly genresRepo: GenresRepository,
  ) {}

  async findAll(): Promise<Genres[]> {
    return this.genresRepo.getAllGenres();
  }

  async create(genre: CreateGenresDto): Promise<Genres> {
    return this.genresRepo.createNewGenre(genre);
  }
}
