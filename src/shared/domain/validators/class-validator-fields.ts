import { validateSync } from "class-validator";
import { FieldsErrors, IValidatorFields } from "./validator-field-interface";
export abstract class ClassValidatorFields<PropsValidated>
  implements IValidatorFields<PropsValidated>
{
  errors: FieldsErrors | null = null;
  validatedData: PropsValidated | null = null;

  validate(data: any): boolean {
    const errors = validateSync(data);
    if (errors.length) {
      this.errors = {};
      errors.forEach((error) => {
        const property = error.property;
        const constraints = Object.values(error.constraints!);
        this.errors[property] = constraints;
      });
    } else {
      this.validatedData = data;
    }

    return !errors.length;
  }
}
