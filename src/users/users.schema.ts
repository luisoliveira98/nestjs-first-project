import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Character } from "src/character/character.schema";

@Schema()
export class User {

  @Prop()
  username: string

  @Prop()
  password: string

}

export const UserSchema = SchemaFactory.createForClass(User)