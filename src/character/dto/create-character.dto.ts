export class CreateCharacterDto {
  readonly id: string;
  readonly status: string
  readonly type: string
  readonly gender: string
  readonly origin: {
    name: string,
    url: string
  }
  readonly location: {
    name: string,
    url: string
  }
  readonly image: string
  readonly episode: string[]
  readonly url: string
  readonly created: string
}