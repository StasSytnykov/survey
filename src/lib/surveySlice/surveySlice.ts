import { ScreenType } from "@/src/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Answers {
  question: string;
  result: string;
}

export interface SurveySliceState {
  answers: Answers[];
  screenType: ScreenType;
}

const initialState: SurveySliceState = {
  answers: [],
  screenType: ScreenType.SINGLE,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: (create) => ({
    setAnswers: create.reducer((state, action: PayloadAction<Answers>) => {
      state.answers.push(action.payload);
    }),
    resetAnswers: create.reducer((state) => {
      state.answers = [];
    }),
    setScreenType: create.reducer(
      (state, action: PayloadAction<ScreenType>) => {
        state.screenType = action.payload;
      }
    ),
  }),

  selectors: {
    selectAnswers: (state) => state.answers,
    selectScreenType: (state) => state.screenType,
  },
});

export const { setAnswers, setScreenType,resetAnswers } = surveySlice.actions;

export const { selectAnswers, selectScreenType } = surveySlice.selectors;
