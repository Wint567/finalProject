import React, { memo } from 'react';
import { BasicModal } from '../ShowMoreModal/ShowMoreModal';
import {
  ButtonContainer,
  ButtonMoreStyle,
  CardTextStyle,
  CardTitleStyle,
  StyleCardsContainer,
} from './style';

const Card = memo(({ cardsInfo, quizInfo }) => (
  <StyleCardsContainer>
    <img src={cardsInfo.image} alt="cardImage"/>
    <CardTitleStyle>{cardsInfo.name}</CardTitleStyle>
    <CardTextStyle>{cardsInfo.description}</CardTextStyle>
    <ButtonContainer>
      <ButtonMoreStyle onClick={() => alert('Coming soon...')}>Start</ButtonMoreStyle>
      {quizInfo && <BasicModal quizInfo={quizInfo}/>}
    </ButtonContainer>
  </StyleCardsContainer>
));

export default Card;
Card.displayName = 'Card';
