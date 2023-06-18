import { Review } from 'src/modules/review/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bussiness {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column({ type: 'datetime' })
  created_at: Date;

  @OneToMany(() => Review, (reviews) => reviews.bussiness_id)
  reviews: Review[];
}
