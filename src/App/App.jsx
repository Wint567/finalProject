import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container } from './style.ts';
import CardsContainer from '../components/Card/CardsContainer';
import QuizPageContainer from '../components/QuizPage/QuizPageContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Navigate to='/quiz'/>}/>
          <Route path='/quiz' element={<CardsContainer />}/>
          <Route path='/quizPage/:quizName' element={<QuizPageContainer />}/>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
