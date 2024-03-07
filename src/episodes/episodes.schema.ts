import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Episode {
  
  @Prop()
  id: string

  @Prop()
  name: string

  @Prop()
  episode: string

  @Prop()
  characters: string[]

  @Prop()
  url: string

  @Prop()
  created: string

}

export const EpisodeSchema = SchemaFactory.createForClass(Episode)