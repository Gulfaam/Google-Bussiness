import { Bussiness } from 'src/modules/bussiness/entities/bussiness.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  review_text: string;

  @Column()
  rating: number;

  @Column({ type: 'datetime' })
  created_at: Date;

  @ManyToOne(() => Bussiness, (bussiness) => bussiness.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'bussiness_id', referencedColumnName: 'id' })
  bussiness_id: number;
}
