import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './services/users.service';
import { AuthUser } from './decorators/user.decorator';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBearerAuth()
  @Get('me')
  getLoggedUserInfo(@AuthUser() user) {
    return this.usersService.getUserInfo(user.id);
  }
}
