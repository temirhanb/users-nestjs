import {Injectable} from "@nestjs/common";
import {CreateRoleDto} from "./dto/create-role.dto";
import {UpdateRoleDto} from "./dto/update-role.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {
  }

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({data: createRoleDto});
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    return this.prisma.role.findFirstOrThrow({where: {id: id}});
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prisma.role.update({where: {id}, data: updateRoleDto});
  }

  remove(id: number) {
    return this.prisma.role.delete({where: {id}});
  }
}
