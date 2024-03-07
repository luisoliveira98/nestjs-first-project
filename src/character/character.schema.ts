import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Character {

  @Prop()
  id: string

  @Prop()
  status: string

  @Prop()
  type: string

  @Prop()
  gender: string

  @Prop({ type: { name: String, url: String }})
  origin: {
    name: string,
    url: string
  }

  @Prop({ type: { name: String, url: String }})
  location: {
    name: string,
    url: string
  }

  @Prop()
  image: string

  @Prop()
  episode: string[]

  @Prop()
  url: string

  @Prop()
  created: string
}

export const CharacterSchema = SchemaFactory.createForClass(Character)