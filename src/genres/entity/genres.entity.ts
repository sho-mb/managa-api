import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Manga } from '../../manga/entity/manga.entity';

@Entity({ name: 'genres' })
export class Genres {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: 'unknown' })
  genre: string;

  @ManyToMany(() => Manga, (manga) => manga.genres)
  manga!: Manga[];
}
