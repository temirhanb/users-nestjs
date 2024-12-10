import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {PrismaService} from "../prisma.service";

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data: createUserDto});
  }

  findAll() {
    return this.prisma.user.findMany({select: {password: true, name: true, login: true}});
  }

  findOne(id: number) {
    return this.prisma.user.findFirstOrThrow({where: {id: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({where: {id}, data: updateUserDto});
  }

  remove(id: number) {
    return this.prisma.user.delete({where: {id}});
  }
}
