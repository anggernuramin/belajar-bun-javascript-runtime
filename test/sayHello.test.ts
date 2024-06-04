import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/sayHello";

describe("Test Runner Bun", () => {
  it("describe should pass return name", async () => {
    const response = sayHello("Angger");
    expect(response).toBe("Hello Angger");
  });
});
