import {Test, TestingModule} from "@nestjs/testing";
import {UsersController} from "./users.controller";
import {PrismaService} from "../prisma.service";
import {UsersService} from "./users.service";

describe("User controller", () => {
  let controller: UsersController;

  let mockFirsUser = {
    id: 1,
    name: "ivan",
    role: [],
    age: 18,
    last_name: "",
    login: "ivanov",
    password: "root2"
  }
  let mockSecondUser = {
    id: 2,
    name: "Petya",
    role: ["USER"],
    age: 18,
    last_name: "petrov",
    login: "petr",
    password: "root2",
  }
  beforeEach(async () => {

    const modules: TestingModule = await Test.createTestingModule(
      {
        controllers: [UsersController],
        providers: [
          PrismaService,
          UsersService,
        ]
      },
    ).overrideProvider(UsersService).useValue({
      findAll: jest.fn().mockResolvedValue([
        mockFirsUser
      ]),
      create: jest.fn().mockResolvedValue(
        mockSecondUser
      ),
      remove: jest.fn(),
      update: jest.fn().mockImplementation((id, data) => ({id, ...data})),
    }).compile();

    controller = modules.get(UsersController);
  });

  it("Should create new user", async () => {

    expect(await controller.create({
      name: "Petya",
      role: ["USER"],
      age: 18,
      last_name: "petrov",
      login: "petr",
      password: "root2",
    })).toEqual(mockSecondUser);
  });
  it("Should update user", async () => {

    expect(await controller.update(2,{
      name: "Ivan",
      role: ["USER","DEVELOPER"],
      age: 77,
      last_name: "",
      login: "petr",
      password: "root5",
    })).toEqual({
      id: 2,
      name: "Ivan",
      role: ["USER","DEVELOPER"],
      age: 77,
      last_name: "",
      login: "petr",
      password: "root5",
    });
  });
  // it('Should delete user',async ()=>{
  //   expect(await controller.remove())
  // })
});