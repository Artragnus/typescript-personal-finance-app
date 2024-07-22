import userShema from "../../schema/user";
import { z } from "zod";

describe("Testing user schema", () => {
  it("should throw an error for a missing name", () => {
    const invalidUser = {
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "",
      email: "john.doe@example.com",
      password: "securePassword",
    };

    expect(() => userShema.parse(invalidUser)).toThrow(z.ZodError);
  });
});
