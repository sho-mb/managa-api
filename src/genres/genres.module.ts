import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genres } from './entity/genres.entity';
import { GenresController } from './genres.controller';
import { GenresService } from './services/genres.service';
import { GenresRepository } from './genres.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Genres])],
  controllers: [GenresController],
  providers: [GenresService, GenresRepository],
})
export class GenresModule {}
