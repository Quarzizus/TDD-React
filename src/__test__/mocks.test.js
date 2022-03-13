describe("mocks", () => {
  it("first mock", () => {
    // the return is in order
    // true -> result1
    // ...

    const myMock = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce("quarzizus")
      .mockReturnValueOnce({ nombre: "Miguel" });

    const result1 = myMock();
    const result2 = myMock();
    const result3 = myMock();

    expect(result1).toBe(true);
    expect(result2).toBe("quarzizus");
    expect(result3).toEqual({ nombre: "Miguel" });
  });
});
