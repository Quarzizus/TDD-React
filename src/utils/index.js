import { storage } from "./db";

const saveUsername = (username) => {
  storage.save({ key: "username", value: username });
};

const getUsername = () => {
  return storage.get("username");
};

export { getUsername, saveUsername };
