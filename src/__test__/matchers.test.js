describe("matchers", () => {
  it("toBe", () => {
    expect(true).toBe(true);
  });
  it("toEqual", () => {
    // for Objects | Arrays
    const data = { one: 1 };
    expect(data).toEqual({ one: 1 });
    const dataArray = [0, 1, 2, 3];
    expect(dataArray).toEqual([0, 1, 2, 3]);
  });
  it("not", () => {
    expect(true).not.toBe(false);
  });
  it("string", () => {
    expect("quarzizus").toMatch(/zizu/i);
  });
});
