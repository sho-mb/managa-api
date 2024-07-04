import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Manga } from '../../manga/entity/manga.entity';

@Entity({ name: 'genres' })
@Unique(['genre'])
export class Genres {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: 'unknown' })
  genre: string;

  @ManyToMany(() => Manga, (manga) => manga.genres)
  manga!: Manga[];
}
