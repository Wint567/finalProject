import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { cards } from './cardsReducer';

const reducers = combineReducers({
  cards,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
