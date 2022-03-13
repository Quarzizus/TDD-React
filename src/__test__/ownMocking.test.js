import { describe, expect, it, vi } from "vitest";
import { storage } from "../utils/db";
import { getUsername, saveUsername } from "../utils/index";

vi.mock("../utils/db/index.js");

describe("ownMocking", () => {
  it("saveUsername", () => {
    const args = { key: "username", value: "Quarzizus" };
    saveUsername("Quarzizus");
    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith(args);
  });

  it("getUsername", () => {
    storage.get.mockReturnValue("Quarzizus");
    const username = getUsername("Quarzizus");
    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith("username");
    expect(username).toBe("Quarzizus");
  });
});
