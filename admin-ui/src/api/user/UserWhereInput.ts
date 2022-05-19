import { ConditionListRelationFilter } from "../condition/ConditionListRelationFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { EmotionalStateListRelationFilter } from "../emotionalState/EmotionalStateListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  condition?: ConditionListRelationFilter;
  doctor?: DoctorListRelationFilter;
  doctor_Id?: DoctorListRelationFilter;
  emotionalState?: EmotionalStateListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
