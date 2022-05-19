import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmotionalStateCreateInput = {
  anxiety?: string | null;
  coping?: string | null;
  feeling?: string | null;
  harm?: string | null;
  medication?: string | null;
  productivity?: string | null;
  sleep?: string | null;
  stress?: string | null;
  suicide?: string | null;
  upTo?: string | null;
  users?: UserWhereUniqueInput | null;
};
