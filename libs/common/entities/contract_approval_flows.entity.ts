import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { User } from './user.entity';

@Entity('ApprovalFlows')
export class ApprovalFlow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Contract, contract => contract.approvalFlows)
  @JoinColumn({ name: 'contract_id' })
  contract: Contract;

  @Column()
  step_number: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'approver_id' })
  approver: User;

  @Column()
  action: string;

  @Column({ type: 'enum', enum: ['internal', 'customer'] })
  action_source: string;

  @Column({ type: 'enum', enum: ['pending', 'approved', 'rejected'], default: 'pending' })
  approval_status: string;

  @Column({ type: 'timestamp', nullable: true })
  approval_date: Date;

  @Column('text', { nullable: true })
  comments: string;
}