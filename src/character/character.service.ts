import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from "./character.schema";
import { CreateCharacterDto } from "./dto/create-character.dto";

@Injectable()
export class CharacterService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel("Character") private characterModel: Model<Character>,
  ) {}

  public async getCharacters(): Promise<Character[]> {
    let charactersDb = await this.characterModel.find()
    if (charactersDb.length === 0) {
      console.log("Empty, request characters...")
      const characters = await this.httpService.axiosRef.get(`https://rickandmortyapi.com/api/character`)
        .then(res => res.data)
        .catch(err => { 
          throw new Error(
            err?.message + ': ' + JSON.stringify(err?.response?.data),
          );
        });

        characters.results.forEach(async (character: CreateCharacterDto) => {
          const createdCharacter = new this.characterModel(character)
          await createdCharacter.save()
        }); 
    }
    charactersDb = await this.characterModel.find()
    return charactersDb
  }

  public async cleanCharacters(): Promise<void> {
    await this.characterModel.deleteMany()
    // await this.characterModel.find()
  }
}