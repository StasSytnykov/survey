import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { surveySlice } from "./surveySlice/surveySlice";

const rootReducer = combineSlices(surveySlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
