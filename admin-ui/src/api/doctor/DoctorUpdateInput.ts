import { UserUpdateManyWithoutDoctorsInput } from "./UserUpdateManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorUpdateInput = {
  patients?: UserUpdateManyWithoutDoctorsInput;
  user_id?: UserWhereUniqueInput;
};
