import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './services/users.service';
import { AuthUser } from './decorators/user.decorator';
import { JwtAuthGuard } from './guards/jwt.guard';
import { UseGuards } from '@nestjs/common/decorators';

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
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getLoggedUserInfo(@AuthUser() user) {
    return this.usersService.getUserInfo(user.id);
  }
}
