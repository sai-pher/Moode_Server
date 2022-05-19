import { ConditionCreateNestedManyWithoutUsersInput } from "./ConditionCreateNestedManyWithoutUsersInput";
import { DoctorCreateNestedManyWithoutUsersInput } from "./DoctorCreateNestedManyWithoutUsersInput";
import { EmotionalStateCreateNestedManyWithoutUsersInput } from "./EmotionalStateCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  condition?: ConditionCreateNestedManyWithoutUsersInput;
  doctor?: DoctorCreateNestedManyWithoutUsersInput;
  doctor_Id?: DoctorCreateNestedManyWithoutUsersInput;
  emotionalState?: EmotionalStateCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
