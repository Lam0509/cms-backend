import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { User } from './user.entity';

@Entity('ContractSignatures')
export class ContractSignature {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Contract, contract => contract.signatures)
  @JoinColumn({ name: 'contract_id' })
  contract: Contract;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'signer_id' })
  signer: User;

  @Column({ type: 'timestamp', nullable: true })
  signed_at: Date;

  @Column({ type: 'enum', enum: ['pending', 'signed', 'rejected'], default: 'pending' })
  status: string;

  @Column({ nullable: true })
  signature_image_path: string;

  @Column({ nullable: true })
  page_number: number;

  @Column({ type: 'float', nullable: true })
  position_x: number;

  @Column({ type: 'float', nullable: true })
  position_y: number;
}