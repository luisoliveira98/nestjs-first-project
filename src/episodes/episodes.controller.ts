import { Controller, Get } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { Episode } from './episodes.schema';

@Controller('episodes')
export class EpisodesController {

    constructor(
        private readonly episodeService: EpisodesService,
    ) {}

    @Get()
    public async getEpisodes(): Promise<Episode[]> {
        const episodes = await this.episodeService.getEpisodes()
        return episodes
    }

    @Get("/delete/")
    public async deleteEpisodes(): Promise<void> {
        await this.episodeService.cleanEpisodes()
        return
    }
}
