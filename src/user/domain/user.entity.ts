import { EntityValidationError } from "../../shared/domain/validators/validation-error";
import { UserValidatorFactory } from "./user.validator";

export type UserConstructorProps = {
  user_id?: string;
  name: string;
  password: string;
  email: string;
  created_at?: Date;
};

export type CreateUserCommand = {
  name: string;
  password: string;
  email: string;
};

export class User {
  user_id: string;
  name: string;
  password: string;
  email: string;
  created_at: Date;

  constructor(props: UserConstructorProps) {
    this.user_id = props.user_id as string;
    this.name = props.name;
    this.password = props.password;
    this.email = props.email;
    this.created_at = props.created_at ?? new Date();
  }

  static create(props: CreateUserCommand): User {
    const user = new User(props);
    User.validate(user);
    return user;
  }


  static validate(entity: User) {
    const validator = UserValidatorFactory.create();
    const isValid = validator.validate(entity);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  changeName(name: string): void {
    this.name = name;
  }

  changePassword(password: string): void {
    this.password = password;
  }

  changeEmail(email: string): void {
    this.email = email;
  }
}
