import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UserRules {
  @MaxLength(40)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;

  constructor({ name, email, password }: UserRules) {
    Object.assign(this, { name, email, password });
  }
}
