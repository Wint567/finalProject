import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Card from './Card';

describe('Card component', () => {
  const cardsInfo = {
    image: 'example.jpg',
    name: 'Example Card',
    description: 'This is an example card.',
  };

  const quizInfo = {
    questions: {
      html: [
        {
          title: "HTML: Какие основные блочные элементы в HTML?",
          options: [
            "<a>, <span>, <img>",
            "<div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>",
            "<input>, <button>, <label>"
          ],
          correct: 1,
        }
      ]
    }
  };


  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Card cardsInfo={cardsInfo} quizInfo={quizInfo} />
      </MemoryRouter>
    );
  });

  it('renders card info when both cardsInfo and quizInfo are provided', () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Card cardsInfo={cardsInfo} quizInfo={quizInfo} />
      </MemoryRouter>
    );

    expect(getByAltText('cardImage')).toBeInTheDocument();
    expect(getByText('EXAMPLE CARD')).toBeInTheDocument();
    expect(getByText('This is an example card.')).toBeInTheDocument();

    // Найти кнопку "Start" по тексту кнопки
    const startButton = getByText('Start');
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveAttribute('href', '/quizPage/Example Card');
  });

  it('does not render anything when cardsInfo or quizInfo is missing', () => {
    const { container } = render(
      <MemoryRouter>
        <Card cardsInfo={cardsInfo} />
      </MemoryRouter>
    );
    expect(container.firstChild).toBeNull();

    const { container: container2 } = render(
      <MemoryRouter>
        <Card quizInfo={quizInfo} />
      </MemoryRouter>
    );
    expect(container2.firstChild).toBeNull();
  });
});
