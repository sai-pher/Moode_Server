import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmotionalStateWhereInput = {
  anxiety?: StringNullableFilter;
  coping?: StringNullableFilter;
  feeling?: StringNullableFilter;
  harm?: StringNullableFilter;
  id?: StringFilter;
  medication?: StringNullableFilter;
  productivity?: StringNullableFilter;
  sleep?: StringNullableFilter;
  stress?: StringNullableFilter;
  suicide?: StringNullableFilter;
  upTo?: StringNullableFilter;
  users?: UserWhereUniqueInput;
};
