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
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { LocalStrategy } from './auth/strategies/local-strategy';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/users.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/strategies/jwt-strategy';

@Module({
  controllers: [AppController, CharacterController, EpisodesController, AuthController],
  providers: [AppService, CharacterService, EpisodesService, AuthService, LocalStrategy, JwtStrategy, UsersService],
  imports: [
    HttpModule,
    JwtModule.register({ 
      secret: 'secret',
      signOptions: { expiresIn: '3600s' },
    }),
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'RickAndMorty'}),
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }]),
    MongooseModule.forFeature([{ name: 'Episode', schema: EpisodeSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UsersModule,
  ],
})
export class AppModule {}
