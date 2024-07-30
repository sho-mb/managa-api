import { Manga } from 'src/manga/entity/manga.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comics' })
export class Comics {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  comicUrl: string;

  @Column({ unique: true })
  vol: number;

  @ManyToOne(() => Manga, (manga) => manga.comics)
  manga!: Manga;
}
