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

  async create(createGenresDto: CreateGenresDto): Promise<Genres> {
    if (this.isUnique(createGenresDto.genre)) {
      return this.genresRepo.createNewGenre(createGenresDto);
    } else {
      throw Error('Can not add same genre');
    }
  }

  private async isUnique(genre: string): Promise<boolean> {
    const data = await this.genresRepo.findOne(genre);
    if (!data) {
      return true;
    } else {
      return false;
    }
  }
}
