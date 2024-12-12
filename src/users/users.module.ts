import {Module} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";
import {PrismaService} from "../prisma/prisma.service";
import {RolesService} from "../roles/roles.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, ConfigService, RolesService],
})
export class UsersModule {
}
