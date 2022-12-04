import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PlayerPosition } from './player-position.entity';
import { Team } from './team.entity';
import { Trophy } from './trophy.entity';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'nationality' })
  nationality: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column({ name: 'height' })
  height: string;

  @Column({ name: 'description' })
  description: string;

  @ManyToOne(() => Team, (team) => team.players)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => PlayerPosition, (playerPosition) => playerPosition.player)
  positions: PlayerPosition[];

  @OneToMany(() => Trophy, (trophy) => trophy.player)
  trophies: Trophy[];
}
