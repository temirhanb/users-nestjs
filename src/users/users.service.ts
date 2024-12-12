import {Injectable} from "@nestjs/common";
import {UpdateUserDto} from "./dto/update-user.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async create(data) {
    return this.prisma.user.create({
        include: {
          role: true
        },
        data: {
          ...data, role: {
            connect: data?.role?.map(item => {
              return {
                id: item
              };
            }) || []
          }
        }
      },
    );
  }

  async findAll() {
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

  async findOne(id: number) {
    return this.prisma.user.findUnique({where: {id}, include: {role: true}});
  }

  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: {id},
      include: {
        role: true
      },
      data: {
        ...data, role: {
          set: [],
          connect: data?.role?.map(item => {
            return {
              id: item
            };
          }) || []
        }
      }
    });
  }

  async remove(id: number) {
    return this.prisma.user.deleteMany({where: {id}});
  }
}
