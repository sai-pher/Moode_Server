import { User } from "../user/User";

export type Condition = {
  conditionName: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
