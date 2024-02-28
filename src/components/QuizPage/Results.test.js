import React from 'react';
import { getByText, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Results from './Results';
import '@testing-library/jest-dom/extend-expect';

describe('Results Component', () => {
  it('renders Results', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Results correct={5} length={5} quizTime={300} />
      </MemoryRouter>
    );
    expect(getByText('Результати')).toBeInTheDocument();
  });

  it('renders correct text for quiz time', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Results correct={5} length={5} quizTime={300} />
      </MemoryRouter>
    );
    expect(getByText('Часу витрачено: 5:00')).toBeInTheDocument();
  });

  it('renders correct text for correct answers', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Results correct={5} length={5} quizTime={300} />
      </MemoryRouter>
    );
    expect(getByText('Правильних відповідей: 5 із 5')).toBeInTheDocument();
  });

  it('renders link to main page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Results correct={5} length={5} quizTime={300} />
      </MemoryRouter>
    );
    expect(getByText('На головну').closest('a')).toHaveAttribute('href', '/quiz');
  });
});
