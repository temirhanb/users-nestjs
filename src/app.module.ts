import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from "./users/users.module";
import {RolesModule} from "./roles/roles.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {
}
