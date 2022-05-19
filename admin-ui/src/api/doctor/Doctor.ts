import { User } from "../user/User";

export type Doctor = {
  createdAt: Date;
  id: string;
  patients?: Array<User>;
  updatedAt: Date;
  user_id?: User;
};
