import { ScreenType } from "@/src/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Answers {
  question: string;
  result: string;
  id: string;
}

export interface SurveySliceState {
  answers: Answers[];
  parentStatus: boolean | null;
  gender: string;
  screenType: ScreenType;
}

const initialState: SurveySliceState = {
  answers: [],
  parentStatus: null,
  gender: "",
  screenType: ScreenType.SINGLE,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: (create) => ({
    setAnswers: create.reducer((state, action: PayloadAction<Answers>) => {
      const isInAnswers = state.answers.findIndex(
        (answer) => answer.id === action.payload.id
      );
      if (isInAnswers > -1) {
        state.answers[isInAnswers].result = action.payload.result;
      } else {
        state.answers.push(action.payload);
      }
    }),
    resetSurvey: create.reducer((state) => {
      state.answers = [];
      state.parentStatus = null;
      state.gender = "";
      state.screenType = ScreenType.SINGLE;
    }),
    setScreenType: create.reducer(
      (state, action: PayloadAction<ScreenType>) => {
        state.screenType = action.payload;
      }
    ),
    setGender: create.reducer((state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    }),
    setParentStatus: create.reducer((state, action: PayloadAction<string>) => {
      state.parentStatus = action.payload === "Yes";
    }),
  }),

  selectors: {
    selectAnswers: (state) => state.answers,
    selectScreenType: (state) => state.screenType,
    selectGender: (state) => state.gender,
    selectParentStatus: (state) => state.parentStatus,
  },
});

export const { setAnswers, setScreenType, resetSurvey, setGender, setParentStatus } =
  surveySlice.actions;

export const { selectAnswers, selectScreenType } = surveySlice.selectors;
