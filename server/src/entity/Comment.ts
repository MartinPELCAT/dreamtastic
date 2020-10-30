import { Field, ObjectType } from "type-graphql";
import { Entity, Column, ManyToOne } from "typeorm";
import AbstractBaseEntity from "./AbstractBaseEntity";
import { User } from "./User";
import { Dream } from "./Dream";

@Entity()
@ObjectType()
export class Comment extends AbstractBaseEntity {
  @Column("text")
  @Field()
  content!: string;

  @ManyToOne(() => User, { lazy: true })
  @Field(() => User)
  author!: User;

  @ManyToOne(() => Dream, { lazy: true })
  @Field(() => Dream)
  dream!: User;
}
