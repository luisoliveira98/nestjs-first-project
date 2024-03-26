import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private jwtService: JwtService) {}

    public async validateUser(username: string, password: string) {
        const user = await this.userService.findOne(username);
        if( user && (await bcrypt.compare(password, user.password)) ) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    public async login(user: User) {
        const payload = {
            username: user.username
        };

        return {
            ...user,
            accessToken: this.jwtService.sign(payload),
        };
    }
}
