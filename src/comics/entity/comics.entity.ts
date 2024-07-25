import { Manga } from 'src/manga/entity/manga.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comics' })
export class Comics {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  comicId: string;

  @Column()
  vol: number;

  @ManyToOne(() => Manga, (manga) => manga.comics)
  manga!: Manga;
}
