import { useAppSelector } from "../lib/hooks";
import { interpolateText } from "../utils/interpolateText";

export const useInterpolateQuestion = (question: string) => {
  const gender = useAppSelector((state) => state.survey.gender);
  const parentStatus = useAppSelector((state) => state.survey.parentStatus);

  console.log(gender);

  const placeholders = {
    gender: gender,
    "who have children": parentStatus ? "who have children" : "",
  };

  const interpolatedQuestion = interpolateText(
    question.toLocaleLowerCase(),
    placeholders
  );

  return { interpolatedQuestion };
};
