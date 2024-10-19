import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { User } from './user.entity';

@Entity('ContractAttachments')
export class ContractAttachment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Contract, contract => contract.attachments)
  @JoinColumn({ name: 'contract_id' })
  contract: Contract;

  @Column({ nullable: true })
  file_name: string;

  @Column()
  file_path: string;

  @Column({ nullable: true })
  file_type: string;

  @CreateDateColumn()
  uploaded_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'uploaded_by' })
  uploader: User;

  @Column({ type: 'enum', enum: ['contract_display', 'note'] })
  attachment_purpose: string;
}