import { Condition } from "../condition/Condition";
import { Doctor } from "../doctor/Doctor";
import { EmotionalState } from "../emotionalState/EmotionalState";

export type User = {
  condition?: Array<Condition>;
  createdAt: Date;
  doctor?: Array<Doctor>;
  doctor_Id?: Array<Doctor>;
  emotionalState?: Array<EmotionalState>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
