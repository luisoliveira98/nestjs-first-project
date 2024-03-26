import { Controller, Get, UseGuards } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { Episode } from './episodes.schema';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('episodes')
export class EpisodesController {

    constructor(
        private readonly episodeService: EpisodesService,
    ) {}

    @UseGuards(JwtGuard)
    @Get()
    public async getEpisodes(): Promise<Episode[]> {
        const episodes = await this.episodeService.getEpisodes()
        return episodes
    }

    @UseGuards(JwtGuard)
    @Get("/delete/")
    public async deleteEpisodes(): Promise<void> {
        await this.episodeService.cleanEpisodes()
        return
    }
}
