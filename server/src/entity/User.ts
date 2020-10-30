import { Field, ObjectType } from "type-graphql";
import { Entity, Column, OneToMany } from "typeorm";
import AbstractBaseEntity from "./AbstractBaseEntity";
import { Dream } from "./Dream";
import { Comment } from "./Comment";

@Entity()
@ObjectType()
export class User extends AbstractBaseEntity {
  @Column()
  @Field()
  description!: string;

  @Column()
  @Field()
  username!: string;

  @Column()
  password!: string;

  @Column()
  token: string;

  @OneToMany(() => Dream, (dream) => dream.author, { lazy: true })
  @Field(() => [Dream])
  dreams: Dream[];

  @OneToMany(() => Comment, (comment) => comment.author, { lazy: true })
  @Field(() => [Comment])
  comments: Comment[];
}
