import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { CardsAPI } from '../../api/api';
import { Cards } from './style';
import { getCardsData } from '../../redux/cardsReducer';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const cardsInfo = useSelector((state) => state.cards.cards);
  const showMoreInfo = useSelector((state) => state.cards.showmore);

  const fetchCards = useCallback(async () => {
    const response = await CardsAPI.cards();
    if (response !== null) {
      dispatch(getCardsData(response[0].cards, response[0].showmore));
    }
  }, []);

  useEffect(() => {
    fetchCards();
  }, []);

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
