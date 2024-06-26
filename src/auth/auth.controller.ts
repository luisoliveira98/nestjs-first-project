import { Body, Controller, Delete, Get, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUser } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req) {
        Logger.log("Login...")
        return await this.authService.login(req.user)
    }

    @Post('register')
    @ApiBody({
        type: CreateUser
    })
    public async registerUser(@Body() createUserDto: CreateUser) {
        Logger.log("Register User...")
        return await this.userService.create(createUserDto.username, createUserDto.password)
    }

    @Get("users")
    @ApiResponse({
        status: 200,
        type: CreateUser,
        isArray: true
    })
    public async getAllUsers() {
        Logger.log("Get all Users...")
        return this.userService.getAllUsers();
    }

    @Delete("deleteUsers")
    public async removeAllUsers() {
        Logger.log("Delete all users...")
        return this.userService.removeUsers()
    }
}
