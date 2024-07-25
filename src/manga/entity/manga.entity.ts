import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genres } from '../../genres/entity/genres.entity';
import { Comics } from 'src/comics/entity/comics.entity';

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

  @OneToMany(() => Comics, (comics) => comics.manga)
  @JoinTable()
  comics: Comics[];

  @ManyToMany(() => Genres, (genres) => genres.manga)
  @JoinTable()
  genres: Genres[];
}
