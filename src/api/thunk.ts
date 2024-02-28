import { createAsyncThunk } from '@reduxjs/toolkit';
import { CARDS, QUESTIONS } from './constants.ts';
import instance from './instance.ts';

export type CardType = {
  image: string;
  name: string;
  description: string;
}

export type ShowMoreItem = {
  image: string;
  name: string;
  time: string;
  text: string;
  id: string;
}

export type CardsData = {
  cards: CardType[];
  showmore: ShowMoreItem[];
}

export type Question = {
  title: string
  options: string[]
  correct: number
}

export type QuestionSet = {
  html: Question[]
  css: Question[]
  js: Question[]
}

export type QuestionData ={
  questions: QuestionSet
}

export const fetchCards = createAsyncThunk<CardsData, void>(`${CARDS}/fetchCards`, async () => {
  const response = await instance.get('cards');
  return response.data[0];
});

export const fetchQuestions = createAsyncThunk<QuestionData, void>(`${QUESTIONS}/fetchQuestions`, async () => {
  const response = await instance.get('questions');
  return response.data[0];
});
