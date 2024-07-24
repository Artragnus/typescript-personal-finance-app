import { ClassValidatorFields } from "../domain/validators/class-validator-fields";
import { EntityValidationError } from "../domain/validators/validation-error";
import { FieldsErrors } from "../domain/validators/validator-field-interface";
type Expected =
  | {
      validator: ClassValidatorFields<any>;
      data: any;
    }
  | (() => any);

expect.extend({
  containsErrorMessages(expected: Expected, received: FieldsErrors) {
    if (typeof expected === "function") {
      try {
        expected();
        return isValid();
      } catch (e) {
        const error = e as EntityValidationError;
        return assertContainsErrorsMessages(error.errors, received);
      }
    } else {
      const { validator, data } = expected;
      const validated = validator.validate(data);

      if (validated) {
        return isValid();
      }
      return assertContainsErrorsMessages(validator.errors, received);
    }
  },
});

function isValid() {
  return {
    message: () => "",
    pass: true,
  };
}

function assertContainsErrorsMessages(
  expected: FieldsErrors,
  received: FieldsErrors
) {
  const isMatch = expect.objectContaining(received).asymmetricMatch(expected);

  return isMatch
    ? isValid()
    : {
        pass: false,
        message: () =>
          `Expected ${JSON.stringify(received)} to contain ${JSON.stringify(
            expected
          )}`,
      };
}
