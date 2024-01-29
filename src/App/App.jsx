import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { CardsAPI } from '../api/api';
import Card from '../components/Card/Card';
import { CardsContainer, Container } from './style';

function App() {
  const [cardsInfo, setCardsInfo] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(null);

  const fetchCards = useCallback(async () => {
    const response = await CardsAPI.cards();
    setCardsInfo(response[0].cards);
    setShowMoreInfo(response[0].showmore);
  }, []);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar />
        <CardsContainer>
          {cardsInfo && cardsInfo.map((card, index) => (
            <Card
              key={index}
              cardsInfo={card}
              quizInfo={showMoreInfo && showMoreInfo[index]}
            />
          ))}
        </CardsContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
