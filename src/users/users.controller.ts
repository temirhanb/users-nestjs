import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UpdateUserDto} from "./dto/update-user.dto";
import {Prisma} from "@prisma/client";

@Controller("users")
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  @UsePipes(new ValidationPipe())
  async update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.usersService.remove(+id);
  }
}
