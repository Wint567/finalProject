import React, { memo } from 'react';
import { BasicModal } from '../ShowMoreModal/ShowMoreModal';
import {
  ButtonContainer, ButtonStyle,
  CardTextStyle,
  CardTitleStyle,
  StyleCardsContainer,
} from './style';

const Card = memo(({ cardsInfo, quizInfo }) => (
  <>
    {cardsInfo && quizInfo && (
      <StyleCardsContainer>
        <img src={cardsInfo.image} alt="cardImage"/>
        <CardTitleStyle>{cardsInfo.name.toUpperCase()}</CardTitleStyle>
        <CardTextStyle>{cardsInfo.description}</CardTextStyle>
        <ButtonContainer>
          <ButtonStyle to={`/quizPage/${cardsInfo.name}`}>Start</ButtonStyle>
          <BasicModal quizInfo={quizInfo}/>
        </ButtonContainer>
      </StyleCardsContainer>
    )}
  </>
));

export default Card;
Card.displayName = 'Card';
