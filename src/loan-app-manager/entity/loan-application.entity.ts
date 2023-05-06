import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class LoanApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  cin: number;
 

  @Column()
  loanAmount: number;

  @Column()
  salary: number;
  // @Column({ nullable: true })
  // document: Document;
}
