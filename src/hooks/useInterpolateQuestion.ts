import { usePlaceholders } from "@/src/hooks/usePlaceholders";
import { interpolateText } from "../utils/interpolateText";

export const useInterpolateQuestion = (question: string) => {
  const placeholders = usePlaceholders();

  const interpolatedQuestion = interpolateText(
    question.toLocaleLowerCase(),
    placeholders
  );

  return { interpolatedQuestion };
};
