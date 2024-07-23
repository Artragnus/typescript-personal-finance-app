import { User } from "../user.entity";

describe("User unit test", () => {
  describe("User constructor test", () => {
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
});
