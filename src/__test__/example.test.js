import { hola } from "../utils/hola";

describe("Example", () => {
  it("#1", () => {
    const result = hola();
    expect(result).toBe(4);
  });
});
