import {Test} from "@nestjs/testing";
import {UsersController} from "../users/users.controller";
import {UsersService} from "../users/users.service";
import {$Enums} from "@prisma/client";

describe("UserController", () => {

  let controller: UsersController;
  let service: UsersService;

  let mockUsers = [{
    id: 1,
    name: "ivan",
    role: [$Enums.Role[1]],
    age: 18,
    last_name: "",
    login: "ivanov",
    password: "root2",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    name: "Petya",
    role: [$Enums.Role[0]],
    age: 18,
    last_name: "petrov",
    login: "petr",
    password: "root2",
    createdAt: new Date(),
    updatedAt: new Date()
  }];

  beforeEach(async () => {

    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockUsers),
            remove: jest.fn().mockImplementation((idRemoved) => mockUsers.filter(id => idRemoved !== id)),
            update: jest.fn().mockImplementation((idUpdated, data) => {
              const updatedTaskIdx = mockUsers.findIndex(({id}) => id === idUpdated);
              mockUsers[updatedTaskIdx] = {id: idUpdated, ...data};
              return mockUsers;
            }),
          }
        }
      ]
    }).compile();

    controller = moduleRef.get(UsersController);
    service = moduleRef.get(UsersService);
  });

  it("Test create user", async () => {

    const newUser = {
      id: 3,
      name: "ivan",
      role: [$Enums.Role[1]],
      age: 18,
      last_name: "",
      login: "ivanov",
      password: "root2",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const result = await service.create(newUser);
    expect(result).toEqual(mockUsers);
  });

  it("Test delete user", async () => {
    const userId = 3;
    const result = await service.remove(userId);
    expect(result).toEqual(mockUsers);
  });

  it("Test update user", async () => {
    expect(await service.update(2, {
      name: "Ivan",
      role: ["USER", "DEVELOPER"],
      age: 77,
      last_name: "",
      login: "petr",
      password: "root5",
    })).toEqual(mockUsers);
  });
});