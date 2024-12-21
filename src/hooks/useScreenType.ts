import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { ScreenType } from "../types";
import { setScreenType } from "../lib/surveySlice/surveySlice";

interface UseScreenType {
  screenType: ScreenType;
}

export const useScreenType = ({ screenType }: UseScreenType) => {
  const dispatch = useAppDispatch();
  const storedScreenType = useAppSelector((state) => state.survey.screenType);

  useEffect(() => {
    dispatch(setScreenType(screenType));
  }, []);

  return { storedScreenType };
};
