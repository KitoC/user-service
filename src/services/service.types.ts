import { Db } from "../db/models/db.types";
import { UserInstance } from "../db/models/User";

export interface UserService {
  findOne: (where: any) => UserInstance;
  register: (req: any) => { user: string };
}

export interface Container {
  db: Db;
  UserService: UserService;
  currentUser: UserInstance;
  userSettings: any;
}
