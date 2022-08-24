/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import { Role } from "./roles/roles.model";
import { Permission } from "./roles/permissions/permissions.model";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async getUser(userName: string) {
        const username = userName.toLowerCase();
        return  await this.userModel.findOne({ username }).populate([
            { path: 'role', model: Role.name, populate: [
                    { path: 'permissions', model: Permission.name }
                ] }
        ]).exec();
    }
}