import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from "./users/users.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client"),
    }),
    UsersModule,
  ],
})
export class AppModule {
}
