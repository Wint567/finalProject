import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { CardsAPI } from '../../api/api';
import { Cards } from './style';
import { getCardsInfo, selectCards, selectShowmore } from '../../redux/cardsReducer';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const cardsInfo = useSelector(selectCards);
  const showMoreInfo = useSelector(selectShowmore);

  const fetchCards = useCallback(async () => {
    try {
      const response = await CardsAPI.cards();
      if (response !== null) {
        dispatch(getCardsInfo({ cards: response[0].cards, showmore: response[0].showmore }));
      }
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }, [dispatch]);

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
