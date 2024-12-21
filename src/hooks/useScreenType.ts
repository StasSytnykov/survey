import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { ScreenType } from "../types";
import { setScreenType } from "../lib/surveySlice/surveySlice";

export const useScreenType = (screenType: ScreenType) => {
  const dispatch = useAppDispatch();
  const storedScreenType = useAppSelector((state) => state.survey.screenType);

  useEffect(() => {
    dispatch(setScreenType(screenType));
  }, [dispatch, screenType]);

  return { storedScreenType };
};
