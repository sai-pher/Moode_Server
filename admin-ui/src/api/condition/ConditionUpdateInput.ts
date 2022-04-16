import { UserUpdateManyWithoutConditionsInput } from "./UserUpdateManyWithoutConditionsInput";

export type ConditionUpdateInput = {
  conditionName?: string | null;
  users?: UserUpdateManyWithoutConditionsInput;
};
