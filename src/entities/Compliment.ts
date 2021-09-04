import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tag } from './Tags';
import { User } from './User';

@Entity("compliments")
export class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({name: "user_sender"})
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: string;

  @JoinColumn({name: "user_receiver"})
  @ManyToOne(() => User)
  useReceiver: User;

  @Column()
  tag_id: string;

  @JoinColumn({name: "tag_id"})
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}