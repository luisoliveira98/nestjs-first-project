import { Controller, Delete, Get, Logger, UseGuards } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.schema';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Characters')
@Controller('character')
export class CharacterController {

  constructor(
    private readonly characterService: CharacterService
  ) {}

  @UseGuards(JwtGuard)
  @Get()
  public async getCharacters(): Promise<Character[]> {
    Logger.log("Request characters...")
    const characters = await this.characterService.getCharacters()
    return characters
  }


  @UseGuards(JwtGuard)
  @Delete("/delete/")
  public async deleteCharacters(): Promise<void> {
    Logger.log(`Delete all characters...`)
    this.characterService.cleanCharacters()
  }
}
