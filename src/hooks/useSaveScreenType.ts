import { useEffect } from "react";
import { useAppDispatch } from "../lib/hooks";
import { ScreenType } from "../types";
import { setScreenType } from "../lib/surveySlice/surveySlice";

export const useSaveScreenType = (screenType: ScreenType) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setScreenType(screenType));
  }, [dispatch, screenType]);
};
