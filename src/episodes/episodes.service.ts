import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode } from './episodes.schema';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {

  constructor(
    private readonly httpService: HttpService,
    @InjectModel("Episode") private episodeModel: Model<Episode>,
  ) {}

  public async getEpisodes(): Promise<Episode[]> {
    let episodes = await this.episodeModel.find()
    if (episodes.length === 0) {
      console.log("empty episodes")
      const episodesAPI = await this.httpService.axiosRef.get(`https://rickandmortyapi.com/api/episode`)
        .then(res => res.data)
        .catch(err => { 
          throw new Error(
            err?.message + ': ' + JSON.stringify(err?.response?.data),
          );
        });

        episodesAPI.results.forEach(async (episode: CreateEpisodeDto) => {
          const createdEpisode = new this.episodeModel(episode)
          await createdEpisode.save()
        })
    }
    episodes = await this.episodeModel.find()
    return episodes
  }

  public async cleanEpisodes(): Promise<void> {
    await this.episodeModel.deleteMany()
    let episodesDb = await this.episodeModel.find()
  }
}
