import { useAppSelector } from "../lib/hooks";

export const usePlaceholders = () => {
  const gender = useAppSelector((state) => state.survey.gender);
  const parentStatus = useAppSelector((state) => state.survey.parentStatus);

  const placeholders = {
    gender: gender,
    "who have children": parentStatus ? "who have children" : "",
  };

  return placeholders;
};
