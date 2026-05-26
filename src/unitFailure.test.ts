import { test, expect } from "@jest/globals";

test("unit test forced failure", () => {
  expect(true).toBe(false);
});
