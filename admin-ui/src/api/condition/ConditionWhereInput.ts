import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ConditionWhereInput = {
  conditionName?: StringNullableFilter;
  id?: StringFilter;
  users?: UserListRelationFilter;
};
