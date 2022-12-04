import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Team } from './team.entity';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Team, (team) => team.matches)
  @JoinColumn({ name: 'our_team_id' })
  ourTeam: Team;

  @Column({ name: 'opponent_team_name' })
  opponentTeamName: string;

  @Column({ name: 'our_points', nullable: true })
  ourPoints: number;

  @Column({ name: 'opponent_points', nullable: true })
  opponentPoints: number;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date', nullable: true })
  endDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
