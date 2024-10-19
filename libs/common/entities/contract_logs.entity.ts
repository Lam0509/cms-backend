import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Contract } from './contract.entity';
import { User } from './user.entity';
import { LogAttachment } from './contract_log_attachments.entity';

@Entity('Logs')
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Contract)
  @JoinColumn({ name: 'contract_id' })
  contract: Contract;

  @Column()
  action: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'action_user_id' })
  actionUser: User;

  @Column('text', { nullable: true })
  log_text: string;

  @CreateDateColumn()
  timestamp: Date;

  @OneToMany(() => LogAttachment, attachment => attachment.log)
  attachments: LogAttachment[];
}