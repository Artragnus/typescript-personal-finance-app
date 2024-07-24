import { InvalidUuidError, Uuid } from "../uuid.vo";

describe("UUID Value Object Unit Tests", () => {
  it("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
  });

  it("should throw error when uuid is invalid", () => {
    expect(() => new Uuid("invalid-uuid")).toThrow(new InvalidUuidError());
  });
});
