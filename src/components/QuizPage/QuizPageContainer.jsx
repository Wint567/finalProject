import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuizPagePreStart from './QuizPagePreStart';
import { CardsAPI } from '../../api/api';
import { getQuestionsData } from '../../redux/cardsReducer';

const QuizPageContainer = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.cards.questions[0]);
  const { quizName } = useParams();
  const image = useSelector((state) => {
    switch (quizName) {
      case 'html':
        return state.cards.cards[0].image;
      case 'css':
        return state.cards.cards[1].image;
      case 'js':
        return state.cards.cards[2].image;
      default:
        return '';
    }
  });

  const fetchQuestions = async () => {
    const response = await CardsAPI.questions();
    if (response !== null) {
      dispatch(getQuestionsData(response[0].questions[quizName]));
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (<QuizPagePreStart image={image} quizInfo={questions}/>);
};

export default QuizPageContainer;
