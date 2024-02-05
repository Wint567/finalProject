import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuizPagePreStart from './QuizPagePreStart';
import { CardsAPI } from '../../api/api';
import { getQuestionsInfo, selectQuestions } from '../../redux/cardsReducer';

const QuizPageContainer = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const { quizName } = useParams();
  const image = useSelector((state) => ((state.cards.cards.find((card) => card.name === quizName)?.image) || ''));

  /* eslint-enable */
  const fetchQuestions = useCallback(async () => {
    try {
      const response = await CardsAPI.questions();
      if (response && response[0] && response[0].questions) {
        dispatch(getQuestionsInfo(response[0].questions[quizName]));
      }
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (<QuizPagePreStart image={image} quizInfo={questions}/>);
};

export default QuizPageContainer;
