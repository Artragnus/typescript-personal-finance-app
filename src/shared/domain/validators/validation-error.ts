import { FieldsErrors } from "./validator-field-interface";
export class EntityValidationError extends Error {
  constructor(public errors: FieldsErrors, message: "Validation Error") {
    super(message);
  }

  count() {
    return Object.keys(this.errors).length;
  }
}
