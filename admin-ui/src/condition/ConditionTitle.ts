import { Condition as TCondition } from "../api/condition/Condition";

export const CONDITION_TITLE_FIELD = "conditionName";

export const ConditionTitle = (record: TCondition): string => {
  return record.conditionName || record.id;
};
