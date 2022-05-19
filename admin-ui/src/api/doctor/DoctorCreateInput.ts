import { UserCreateNestedManyWithoutDoctorsInput } from "./UserCreateNestedManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorCreateInput = {
  patients?: UserCreateNestedManyWithoutDoctorsInput;
  user_id: UserWhereUniqueInput;
};
