import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Log } from './contract_logs.entity';

@Entity('LogAttachments')
export class LogAttachment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Log, log => log.attachments)
  @JoinColumn({ name: 'log_id' })
  log: Log;

  @Column()
  file_path: string;

  @Column()
  file_type: string;

  @Column()
  purpose: string;

  @CreateDateColumn()
  uploaded_at: Date;
}