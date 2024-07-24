import { FieldsErrors } from "./src/shared/domain/validators/validators-fields-interface";

declare global {
  namespace jest {
    interface Matchers<R> {
      containsErrorMessages(expected: FieldsErrors): R;
    }
  }
}
