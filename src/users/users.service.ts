/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

    async getUser(userName: string) {
        const username = userName.toLowerCase();
        const user = await this.userModel.findOne({ username });
        return user;
    }
}