import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuizPagePreStart from './QuizPagePreStart.tsx';
import { CardType, fetchQuestions } from '../../api/thunk.ts';
import { selectQuestions } from '../../redux/cardsReducer.ts';
import { AppDispatch, RootState } from '../../redux/store.ts';

const QuizPageContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const questions = useSelector(selectQuestions);
  const { quizName } = useParams<string>();
  const image = useSelector((state: RootState) => {
    const cards = state.cards.cards as CardType[];
    const foundCard = cards?.find((card: { name: string }) => card.name === quizName);
    return foundCard?.image || '';
  });

  /* eslint-enable */
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (<QuizPagePreStart image={image} quizInfo={questions[quizName]}/>);
};

export default QuizPageContainer;
