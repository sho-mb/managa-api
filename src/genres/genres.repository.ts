import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genres } from './entity/genres.entity';
import { Repository } from 'typeorm';
import { CreateGenresDto } from './requests/create-genres.dto';

@Injectable()
export class GenresRepository {
  constructor(
    @InjectRepository(Genres)
    private readonly genresRepository: Repository<Genres>,
  ) {}

  async createNewGenre(genre: CreateGenresDto): Promise<Genres> {
    const newGenre = this.genresRepository.create(genre);
    return this.genresRepository.save(newGenre);
  }

  async getAllGenres(): Promise<Genres[]> {
    return this.genresRepository.find();
  }
}
