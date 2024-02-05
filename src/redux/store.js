import { combineReducers, createStore } from 'redux';
import { cardsReducer } from './cardsReducer';

const reducers = combineReducers({
  cards: cardsReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
