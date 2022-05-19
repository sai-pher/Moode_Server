import { UserCreateNestedManyWithoutConditionsInput } from "./UserCreateNestedManyWithoutConditionsInput";

export type ConditionCreateInput = {
  conditionName?: string | null;
  users?: UserCreateNestedManyWithoutConditionsInput;
};
