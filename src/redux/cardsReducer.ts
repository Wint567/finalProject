// Ваш cardsReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store.ts';
import {
  CardsData,
  CardType,
  fetchCards,
  fetchQuestions,
  QuestionData,
  QuestionSet,
  ShowMoreItem,
} from '../api/thunk.ts';

type initialStateType = {
  cards: CardType | CardType[]
  showmore: ShowMoreItem | ShowMoreItem[]
  questions: QuestionSet | QuestionSet[]
}

const initialState: initialStateType = {
  cards: [],
  showmore: [],
  questions: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action: PayloadAction<CardsData>) => {
      return {
        ...state,
        cards: action.payload.cards,
        showmore: action.payload.showmore,
      };
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<QuestionData>) => {
      return {
        ...state,
        questions: action.payload.questions,
      };
    });
  },
});

export const selectCards = (state: RootState) => state.cards.cards;
export const selectShowmore = (state: RootState) => state.cards.showmore;
export const selectQuestions = (state: RootState) => state.cards.questions;

export const { reducer: cardsReducer } = cardsSlice;
