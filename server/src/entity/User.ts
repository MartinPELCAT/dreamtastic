import { Field, ObjectType } from "type-graphql";
import { Entity, Column } from "typeorm";
import AbstractBaseEntity from "./AbstractBaseEntity";

@Entity()
@ObjectType({ description: "General database" })
export class User extends AbstractBaseEntity {
  @Column()
  @Field()
  firstName!: string;

  @Column()
  @Field()
  lastName!: string;

  @Column()
  @Field()
  username!: string;

  @Column()
  password!: string;

  @Column()
  token: string;
}
