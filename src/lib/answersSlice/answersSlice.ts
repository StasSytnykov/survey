import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Answer {
  question: string;
  answer: string;
}

export interface AnswersSliceState {
  answers: Answer[];
}

const initialState: AnswersSliceState = {
  answers: [],
};

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: (create) => ({
    addAnswers: create.reducer((state, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
    }),
  }),

  selectors: {
    selectAnswers: (state) => state.answers,
  },
});

export const { addAnswers } = answersSlice.actions;

export const { selectAnswers } = answersSlice.selectors;
