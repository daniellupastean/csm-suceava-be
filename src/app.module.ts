import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './orm.config';
import { AppController } from './app.controller';
import { GalleryController } from './controllers/gallery.controller';
import { AppService } from './app.service';
import { GalleryService } from './services/gallery.service';
import { GalleryImage } from './entities/gallery-image.entity';
import { TextSection } from './entities/text-section.entity';
import { StaffMember } from './entities/staff-member.entity';
import { Sponsor } from './entities/sponsor.entity';
import { Championship } from './entities/championship.entity';
import { User } from './entities/user.entity';
import { Article } from './entities/article.entity';
import { Match } from './entities/match.entity';
import { PlayerPosition } from './entities/player-position.entity';
import { Player } from './entities/player.entity';
import { Team } from './entities/team.entity';
import { Trophy } from './entities/trophy.entity';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailsService } from './services/emails.service';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt.guard';
import { RolesGuard } from './guards/roles.guard';
import { mailConfig } from './mail.config';
import { UsersService } from './services/users.service';
import { AuthController } from './controllers/auth.controller';
import { EmailsController } from './controllers/emails.controller';
import { ArticlesService } from './services/articles.service';
import { ArticlesController } from './controllers/articles.controller';
import { StaffController } from './controllers/staff.controller';
import { StaffService } from './services/staff.service';
import { TeamsController } from './controllers/teams.controller';
import { TeamsService } from './services/teams.service';
import { SponsorsService } from './services/sponsors.service';
import { SponsorsController } from './controllers/sponsors.controller';
import { ChampionshipsController } from './controllers/championships.controller';
import { ChampionshipsService } from './services/championships.service';
import { PlayersController } from './controllers/players.controller';
import { PlayersService } from './services/players.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MailerModule.forRoot(mailConfig),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    TypeOrmModule.forFeature([Article]),
    TypeOrmModule.forFeature([Championship]),
    TypeOrmModule.forFeature([GalleryImage]),
    TypeOrmModule.forFeature([Match]),
    TypeOrmModule.forFeature([PlayerPosition]),
    TypeOrmModule.forFeature([Player]),
    TypeOrmModule.forFeature([Sponsor]),
    TypeOrmModule.forFeature([StaffMember]),
    TypeOrmModule.forFeature([Team]),
    TypeOrmModule.forFeature([TextSection]),
    TypeOrmModule.forFeature([Trophy]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    AppController,
    GalleryController,
    AuthController,
    EmailsController,
    ArticlesController,
    StaffController,
    TeamsController,
    SponsorsController,
    ChampionshipsController,
    PlayersController,
  ],
  providers: [
    AppService,
    GalleryService,
    UsersService,
    EmailsService,
    ArticlesService,
    AuthService,
    JwtStrategy,
    JwtAuthGuard,
    RolesGuard,
    StaffService,
    TeamsService,
    SponsorsService,
    ChampionshipsService,
    PlayersService,
  ],
})
export class AppModule {}
