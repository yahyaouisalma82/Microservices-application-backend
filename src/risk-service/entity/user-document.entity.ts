import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;
}
