// Ваш store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './cardsReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
