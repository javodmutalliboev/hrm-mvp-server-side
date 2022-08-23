import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Post / Login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return { User: req.user, msg: 'User logged in' };
  }

  //Get / logout
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' }
  }
}
