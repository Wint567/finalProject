const GET_CARDS_INFO = 'GET_CARDS_INFO';
const GET_QUESTIONS_INFO = 'GET_QUESTIONS_INFO';

const initialState = {
  cards: null,
  showmore: null,
  questions: [],
};

/* eslint-disable */
export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS_INFO:
      return {
        ...state,
        cards: action.cards,
        showmore: action.showmore,
      };
    case GET_QUESTIONS_INFO:
      return {
        ...state,
        questions: [action.questions],
      }
    default:
      return state;
  }
};
/* eslint-enable */

export const getCardsData = (cards, showmore) => ({
  type: GET_CARDS_INFO,
  cards,
  showmore,
});

export const getQuestionsData = (questions) => ({
  type: GET_QUESTIONS_INFO,
  questions,
});
