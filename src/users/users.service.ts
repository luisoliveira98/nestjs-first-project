import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import { CreateUser } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}

    public async findOne(username: string) {
        Logger.log("Find one user...")
        const users = await this.userModel.find();
        return users.filter(user => user.username === username)[0]
    }

    public async create(username: string, passwordS: string) {
        const createUserDto = {
            username: username,
            password: await bcrypt.hash(passwordS, 10)
        }
        const user = await this.userModel.create(createUserDto);
        await user.save();
        const { password, ...result } = user;
        return result;
    }

    public async getAllUsers() {
        return await this.userModel.find();
    }

    public async removeUsers() {
        await this.userModel.deleteMany()
    }
}
