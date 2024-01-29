import React, { useEffect, useState } from 'react';
import {
  Button,
  QuizContainer, QuizLi,
  Time,
  Title,
} from './style';
import Results from './Results';

const QuizPagePreStart = ({ quizInfo, image }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [time, setTime] = useState(300);
  const [quizTime, setQuizTime] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (!timeUp && index === quizInfo[step].correct) {
      setCorrect(correct + 1);
    }
  };

  useEffect(() => {
    let timer;

    const handleTimerTick = () => {
      setTime((prevTime) => {
        if (prevTime - 1 === 0) {
          setTimeUp(true);
        }
        return prevTime - 1;
      });

      setQuizTime((prevElapsedTime) => prevElapsedTime + 1);
    };

    if (loading && time > 0 && !timeUp && quizInfo && quizInfo.length > 0) {
      timer = setInterval(handleTimerTick, 1000);
    }

    if (step >= (quizInfo ? quizInfo.length : 0) || timeUp) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [loading, time, timeUp, step, quizInfo]);

  return !loading ? (
    <QuizContainer>
      <Time>Time estimate: 5 minutes</Time>
      <Button onClick={() => setLoading(true)}>Start</Button>
    </QuizContainer>
  ) : (
    <QuizContainer>
      {quizInfo[step] && !timeUp && (
        <>
          <img src={image} alt={'quiz-image'} />
          <Time>Оставшееся время: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</Time>
          <Title>{quizInfo[step]?.title}</Title>
          <ul>
            {quizInfo[step]?.options.map((text, index) => (
              <QuizLi onClick={() => onClickVariant(index)} key={index}>{text}</QuizLi>
            ))}
          </ul>
        </>
      )}

      {step >= quizInfo.length || timeUp
        ? <Results quizTime={quizTime} correct={correct} length={quizInfo.length}/> : null}
    </QuizContainer>
  );
};

export default QuizPagePreStart;
