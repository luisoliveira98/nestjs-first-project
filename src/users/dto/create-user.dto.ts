import { ApiProperty } from "@nestjs/swagger";

export class CreateUser {

    @ApiProperty({
        example: "username",
        required: true,
    })
    readonly username: string;

    @ApiProperty({
        example: "password",
        required: true,
    })
    readonly password: string;
}