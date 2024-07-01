import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Genres } from './genres.entity';

@Entity()
export class Manga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  managaName: string;

  @Column()
  author: string;

  @Column()
  topViewUrl: string;

  @Column()
  content: string;

  @Column()
  urlOfWeb: string;

  @OneToMany(() => Genres, (genres) => genres.manga, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  genres: Genres[];
}
