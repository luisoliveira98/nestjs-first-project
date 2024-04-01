import { ApiProperty } from "@nestjs/swagger"

export class CreateEpisodeDto {

    @ApiProperty({
        example: "1",
        required: true
    })
    readonly id: string

    @ApiProperty({
        example: "Rick",
        required: true,
    })
    readonly name: string

    @ApiProperty({
        example: "Episode name",
        required: true,
    })
    readonly episode: string

    @ApiProperty({
        example: ["Character"],
        required: true,
    })
    readonly characters: string[]

    @ApiProperty({
        example: "https://example.com",
        required: true,
    })
    readonly url: string

    @ApiProperty({
        required: true,
    })
    readonly created: string
}