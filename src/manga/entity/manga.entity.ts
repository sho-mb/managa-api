import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genres } from '../../genres/entity/genres.entity';

@Entity()
export class Manga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mangaName: string;

  @Column()
  author: string;

  @Column()
  topViewUrl: string;

  @Column('longtext')
  content: string;

  @Column()
  urlOfWeb: string;

  @ManyToMany(() => Genres, (genres) => genres.manga)
  @JoinTable()
  genres: Genres[];
}
