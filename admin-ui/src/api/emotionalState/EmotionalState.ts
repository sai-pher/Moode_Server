import { User } from "../user/User";

export type EmotionalState = {
  anxiety: string | null;
  coping: string | null;
  createdAt: Date;
  feeling: string | null;
  harm: string | null;
  id: string;
  medication: string | null;
  productivity: string | null;
  sleep: string | null;
  stress: string | null;
  suicide: string | null;
  updatedAt: Date;
  upTo: string | null;
  users?: User | null;
};
