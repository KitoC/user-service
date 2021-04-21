import { UserInstance } from "../../db/models/db.types";
import errors from "../../errors";
import { Container } from "../service.types";
import makeGetUserAppSettings from "./getUserAppSettings";

const makeUserService = (container: Container) => {
  const { db, currentUser, userSettings } = container;

  const findOne = (options: any = {}) => {
    const attributes = db.User.getDecryptedAttributes();

    return db.User.findOne({ attributes, ...options });
  };

  return {
    findOne,
    getUserAppSettings: makeGetUserAppSettings(container),
  };
};

export default makeUserService;
