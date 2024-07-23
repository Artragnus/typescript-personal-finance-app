import { IsNotEmpty } from "class-validator";

export class UserRules {
  @IsNotEmpty()
  name: string;
}
