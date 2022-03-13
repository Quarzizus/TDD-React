const asyncCallback = (cb) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

const asyncPromise = () => {
  return new Promise((resolve) => {
    resolve(true);
  });
};

describe("async", () => {
  it("callbacks", (done) => {
    asyncCallback((result) => {
      expect(result).toBe(true);
      done();
    });
  });
  it("promise then", async () => {
    asyncPromise().then((result) => {
      expect(result).toBe(true);
    });
  });
  it("promise async&await", async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});
