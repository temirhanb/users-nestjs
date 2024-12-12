import {Test} from "@nestjs/testing";
import {RolesController} from "./roles.controller";
import {RolesService} from "./roles.service";

describe("Roles Controller", () => {

  let controller: RolesController;
  let service: RolesService;

  let mockRoles = [{
    id: 1,
    name: "DEVELOPER",
  }, {
    id: 2,
    name: "USER",
  }];

  beforeEach(async () => {

    const moduleRef = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [
        {
          provide: RolesService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockRoles),
            remove: jest.fn().mockImplementation((idRemoved) => mockRoles.filter(id => idRemoved !== id)),
            update: jest.fn().mockImplementation((idUpdated, data) => {
              const updatedTaskIdx = mockRoles.findIndex(({id}) => id === idUpdated);
              mockRoles[updatedTaskIdx] = {id: idUpdated, ...data};
              return mockRoles;
            }),
          }
        }
      ]
    }).compile();

    controller = moduleRef.get(RolesController);
    service = moduleRef.get(RolesService);
  });

  it("Test create role", async () => {

    const newUser = {
      id: 3,
      name: "DESIGN",
    };
    const result = await service.create(newUser);
    expect(result).toEqual(mockRoles);
  });

  it("Test delete role", async () => {
    const userId = 3;
    const result = await service.remove(userId);
    expect(result).toEqual(mockRoles);
  });

  it("Test update role", async () => {
    expect(await service.update(2, {
      name: "NEW_USER",
    })).toEqual(mockRoles);
  });
});