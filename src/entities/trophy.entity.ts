import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Player } from './player.entity';
import { Team } from './team.entity';

@Entity('trophies')
export class Trophy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Team, (team) => team.trophies, { nullable: true })
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @ManyToOne(() => Player, (player) => player.trophies, { nullable: true })
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'category' })
  category: string;

  @Column({ name: 'date' })
  date: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
