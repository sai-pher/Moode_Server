import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "id";

export const DoctorTitle = (record: TDoctor): string => {
  return record.id || record.id;
};
