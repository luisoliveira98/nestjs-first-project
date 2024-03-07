import { Controller, Delete, Get, Logger } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.schema';

@Controller('character')
export class CharacterController {

  constructor(
    private readonly characterService: CharacterService
  ) {}

  @Get()
  public async getCharacters(): Promise<Character[]> {
    const characters = await this.characterService.getCharacters()
    return characters
  }


  @Get("/delete/")
  public async deleteCharacters(): Promise<void> {
    Logger.log(`Delete all characters...`)
    this.characterService.cleanCharacters()
  }
}
