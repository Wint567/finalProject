import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { Cards } from './style';
import { selectCards, selectShowmore } from '../../redux/cardsReducer';
import { fetchCards } from '../../api/thunk.ts';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const cardsInfo = useSelector(selectCards);
  const showMoreInfo = useSelector(selectShowmore);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <Cards>
      {cardsInfo && cardsInfo.map((card, index) => (
        <Card
          key={index}
          cardsInfo={card}
          quizInfo={showMoreInfo && showMoreInfo[index]}
        />
      ))}
    </Cards>
  );
};

export default CardsContainer;
