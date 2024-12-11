import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {PrismaService} from "../prisma.service";
import {Injectable} from "@nestjs/common";

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
    return this.prisma.user.findMany(
      {
        select:
          {
            id: true,
            name: true,
            login: true,
            password: true,
            age: true,
            last_name: true,
            createdAt: true,
            updatedAt: true
          }
      });
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
