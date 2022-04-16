import { ConditionUpdateManyWithoutUsersInput } from "./ConditionUpdateManyWithoutUsersInput";
import { DoctorUpdateManyWithoutUsersInput } from "./DoctorUpdateManyWithoutUsersInput";
import { EmotionalStateUpdateManyWithoutUsersInput } from "./EmotionalStateUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  condition?: ConditionUpdateManyWithoutUsersInput;
  doctor?: DoctorUpdateManyWithoutUsersInput;
  doctor_Id?: DoctorUpdateManyWithoutUsersInput;
  emotionalState?: EmotionalStateUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
