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

@Entity('player_positions')
export class PlayerPosition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'position' })
  position: string;

  @ManyToOne(() => Player, (player) => player.positions)
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @ManyToOne(() => Team, (team) => team.playerPositions)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date', nullable: true })
  endDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
