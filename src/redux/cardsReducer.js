import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  showmore: [],
  questions: [],
};
/* eslint-disable */
export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCardsInfo: (state, action) => {
      state.cards = action.payload.cards;
      state.showmore = action.payload.showmore;
    },
    getQuestionsInfo: (state, action) => {
      state.questions = action.payload;
    },
  },
});
/* eslint-enable */

export const { getCardsInfo, getQuestionsInfo } = cardsReducer.actions;
export const selectCards = (state) => state.cards.cards;
export const selectShowmore = (state) => state.cards.showmore;
export const selectQuestions = (state) => state.cards.questions;

export const cards = cardsReducer.reducer;
