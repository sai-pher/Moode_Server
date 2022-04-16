import { EmotionalState as TEmotionalState } from "../api/emotionalState/EmotionalState";

export const EMOTIONALSTATE_TITLE_FIELD = "anxiety";

export const EmotionalStateTitle = (record: TEmotionalState): string => {
  return record.anxiety || record.id;
};
