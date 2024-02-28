import React from 'react';
import { ResultsTitle, EndButton } from './style.ts';

type PropsType = {
    correct: number,
    length: number,
    quizTime: number
}
const Results:React.FC<PropsType> = ({ correct, length, quizTime }) => (
  <>
    <ResultsTitle>Результати</ResultsTitle>
    <p>Часу витрачено: {Math.floor(quizTime / 60)}:{(quizTime % 60).toString().padStart(2, '0')}</p>
    <p>Правильних відповідей: {correct} із {length}</p>
    <EndButton to='/quiz'>На головну</EndButton>
  </>
);

export default Results;
