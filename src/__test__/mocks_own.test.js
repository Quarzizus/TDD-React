import { getUsername, saveUsername } from "../utils/index";
import { storage } from "../utils/db";

jest.mock("../utils/db");

describe("storage", () => {
  it("saveUsername", () => {
    saveUsername("quarzizus");
    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith({
      key: "username",
      value: "quarzizus",
    });
  });
  it("getUsername", () => {
    storage.get.mockReturnValueOnce("quarzizus");
    const result = getUsername();
    expect(result).toBe("quarzizus");
    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith("username");
  });
});
