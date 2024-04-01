import { ApiProperty } from "@nestjs/swagger";

export class CreateCharacterDto {

  @ApiProperty({
    example: "1",
    required: true
  })
  readonly id: string;

  @ApiProperty({
    example: "status",
    required: true
  })
  readonly status: string

  @ApiProperty({
    example: "type",
    required: true
  })
  readonly type: string

  @ApiProperty({
    example: "M",
    required: true
  })
  readonly gender: string

  @ApiProperty({
    example: {
      name: "name",
      url: "https://example.com"
    },
    required: true
  })
  readonly origin: {
    name: string,
    url: string
  }

  @ApiProperty({
    example: {
      name: "location",
      url: "https://example.com"
    },
    required: true
  })
  readonly location: {
    name: string,
    url: string
  }

  @ApiProperty({
    example: "image",
    required: true
  })
  readonly image: string

  @ApiProperty({
    example: ["episode 1"],
    required: true
  })
  readonly episode: string[]

  @ApiProperty({
    example: "https://example.com",
    required: true
  })
  readonly url: string

  @ApiProperty({
    example: true,
    required: true
  })
  readonly created: string
}