import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSchema } from './character/character.schema';
import { EpisodeSchema } from './episodes/episodes.schema';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesService } from './episodes/episodes.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'RickAndMorty'}),
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }]),
    MongooseModule.forFeature([{ name: 'Episode', schema: EpisodeSchema }]),
  ],
  controllers: [AppController, CharacterController, EpisodesController],
  providers: [AppService, CharacterService, EpisodesService],
})
export class AppModule {}
