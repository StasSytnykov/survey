import { ScreenType } from "@/src/types";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "../lib/hooks";
import {
  setAnswers,
  setGender,
  setParentStatus,
} from "../lib/surveySlice/surveySlice";
import { Option } from "../types";

interface UseClickButtonProps {
  question: string;
  id: string;
  screenType: ScreenType;
}

export const useClickButton = ({
  question,
  id,
  screenType,
}: UseClickButtonProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleButtonClick = ({ label, next }: Option) => {
    if (next === null) {
      return router.push("/results");
    }

    if (question.toLowerCase().includes("your gender")) {
      dispatch(setGender(label));
    }

    if (
      question.toLowerCase().includes("parent") &&
      question.toLowerCase().includes("you")
    ) {
      dispatch(setParentStatus(label));
    }

    if (screenType !== ScreenType.INFO) {
      dispatch(setAnswers({ question, result: label, id: id }));
    }

    router.push(next);
  };

  return { handleButtonClick };
};
