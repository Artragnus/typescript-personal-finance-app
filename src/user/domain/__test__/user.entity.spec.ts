import { EntityValidationError } from "../../../shared/domain/validators/validation-error";
import { User } from "../user.entity";

describe("User Unit Tests", () => {
  describe("User Constructor", () => {
    it("should create a user instance", () => {
      const user = new User({
        name: "Vinicius",
        password: "Teste123",
        email: "teste@teste.com.br",
      });
      expect(user).toBeInstanceOf(User);
      expect(user).toHaveProperty("password");
      expect(user.name).toBe("Vinicius");
    });

    it("should rename user", () => {
      const user = new User({
        name: "Vinicius",
        password: "Teste123",
        email: "teste@teste.com.br",
      });
      user.changeName("Joao");
      expect(user.name).toBe("Joao");
    });
  });

  describe("User Create Command", () => {
    it("should throw error when name is empty", () => {
      try {
        const user = User.create({
          name: "",
          password: "123",
          email: "",
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
});
