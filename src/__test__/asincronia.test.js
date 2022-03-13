import { describe, expect, it } from "vitest";

const timer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 0);
  });
};

describe("Asincronía", () => {
  it("Timer with then", () => {
    timer().then((res) => {
      expect(res).toBe(true);
    });
  });
  it("Timer with async&await", async () => {
    const result = await timer();
    expect(result).toBe(true);
  });
});
