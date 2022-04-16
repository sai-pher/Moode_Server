import { EmotionalStateWhereInput } from "./EmotionalStateWhereInput";
import { EmotionalStateOrderByInput } from "./EmotionalStateOrderByInput";

export type EmotionalStateFindManyArgs = {
  where?: EmotionalStateWhereInput;
  orderBy?: Array<EmotionalStateOrderByInput>;
  skip?: number;
  take?: number;
};
