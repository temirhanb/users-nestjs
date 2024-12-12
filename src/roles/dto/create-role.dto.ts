import {IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;
}
