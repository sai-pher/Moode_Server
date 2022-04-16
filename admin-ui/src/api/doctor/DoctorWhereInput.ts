import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorWhereInput = {
  id?: StringFilter;
  patients?: UserListRelationFilter;
  user_id?: UserWhereUniqueInput;
};
