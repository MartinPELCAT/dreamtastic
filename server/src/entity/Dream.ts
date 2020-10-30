import { Field, ObjectType } from "type-graphql";
import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import AbstractBaseEntity from "./AbstractBaseEntity";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
@ObjectType()
export class Dream extends AbstractBaseEntity {
  @Column("text")
  @Field()
  content!: string;

  @Column("bool")
  anonym!: Boolean;

  @ManyToOne(() => User, { lazy: true })
  @Field(() => User)
  author!: User;

  @OneToMany(() => Comment, (comment) => comment.author, { lazy: true })
  @Field(() => [Comment])
  comments: Comment[];
}
