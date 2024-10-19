import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('UserSignatures')
export class UserSignature {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.signatures)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  signature_image_path: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}