describe("setup & teardown", () => {
  beforeAll(() => {
    console.log("Before all");
  });

  beforeEach(() => {
    console.log("Before each");
  });

  afterAll(() => {
    console.log("after all");
  });

  afterEach(() => {
    console.log("after each");
  });

  it("#1", () => {
    expect(true).toBe(true);
  });
  it("#2", () => {
    expect(false).toBe(false);
  });
});
