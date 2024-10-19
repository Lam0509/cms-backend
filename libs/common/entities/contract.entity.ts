import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { ContractAttachment } from './contract_attachments.entity';
import { ApprovalFlow } from './contract_approval_flows.entity';
import { ContractSignature } from './contract_signatures.entity';

@Entity('Contracts')
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contract_number: string;

  @ManyToOne(() => User, user => user.customerContracts)
  @JoinColumn({ name: 'customer_id' })
  customer: User;

  @Column({ nullable: true })
  contract_type: string;

  @ManyToOne(() => User, user => user.createdContracts)
  @JoinColumn({ name: 'created_by' })
  creator: User;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  signers_count: number;

  @Column({ type: 'enum', enum: ['new', 'pending', 'signed', 'rejected'], default: 'new' })
  status: string;

  @Column('text', { nullable: true })
  note: string;

  @OneToMany(() => ContractAttachment, attachment => attachment.contract)
  attachments: ContractAttachment[];

  @OneToMany(() => ApprovalFlow, approvalFlow => approvalFlow.contract)
  approvalFlows: ApprovalFlow[];

  @OneToMany(() => ContractSignature, signature => signature.contract)
  signatures: ContractSignature[];
}