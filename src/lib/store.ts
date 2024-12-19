import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { answersSlice } from "./answersSlice/answersSlice";

const rootReducer = combineSlices(answersSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
