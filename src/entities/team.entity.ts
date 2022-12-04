import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Match } from './match.entity';
import { PlayerPosition } from './player-position.entity';
import { Player } from './player.entity';
import { Trophy } from './trophy.entity';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'category' })
  category: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @OneToMany(() => PlayerPosition, (playerPosition) => playerPosition.team)
  playerPositions: PlayerPosition[];

  @OneToMany(() => Match, (match) => match.ourTeam)
  matches: Match[];

  @OneToMany(() => Trophy, (trophy) => trophy.team)
  trophies: Trophy[];
}
