import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Manga } from './manga.entity';

@Entity({ name: 'genres' })
export class Genres {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  mangaId: string;

  @Column({ default: 'unknown' })
  genre: string;

  @ManyToOne(() => Manga, (manga) => manga.genres)
  @JoinColumn({ name: 'mangaId' })
  manga!: Manga;
}
