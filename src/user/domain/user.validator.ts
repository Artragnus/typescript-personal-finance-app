import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import { ClassValidatorFields } from "../../shared/domain/validators/class-validator-fields";
import { User } from "./user.entity";

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

export class UserValidator extends ClassValidatorFields<UserRules> {
  validate(entity: User) {
    return super.validate(new UserRules(entity));
  }
}
export class UserValidatorFactory {
  static create() {
    return new UserValidator();
  }
}
