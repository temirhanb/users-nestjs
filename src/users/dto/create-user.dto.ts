import {IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MinLength} from "class-validator";
import {$Enums} from "@prisma/client";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  login: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 6,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1
    }
  )
  password: string;

  @IsOptional()
  @IsEnum($Enums.Role)
  role: Array<$Enums.Role>;

  @IsOptional()
  @IsInt()
  age: number;

  @IsOptional()
  @IsString()
  last_name: string;
}