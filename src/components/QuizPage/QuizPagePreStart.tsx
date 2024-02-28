import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  QuizContainer,
  QuizLi,
  Time,
  Title,
} from './style.ts';
import Results from './Results.tsx';
import { Question } from '../../api/thunk.ts';

type QuizPagePreStartProps = {
  quizInfo: Question[];
  image: string;
};

const QuizPagePreStart: FC<QuizPagePreStartProps> = ({ quizInfo, image }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const [time, setTime] = useState<number>(300);
  const [quizTime, setQuizTime] = useState<number>(0);
  const [timeUp, setTimeUp] = useState<boolean>(false);

  const onClickVariant = (index: number) => {
    setStep((prevStep) => prevStep + 1);

    if (!timeUp && quizInfo[step]?.correct === index) {
      setCorrect((prevCorrect) => prevCorrect + 1);
    }
  };
  // eslint-disable-next-line
  let timer: NodeJS.Timeout;
  // eslint-enable-next-line
  useEffect(() => {
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
              <img src={image} alt="quiz-image" />
              <Time>Remaining time: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</Time>
              <Title>{quizInfo[step]?.title}</Title>
              <ul>
                {quizInfo[step]?.options.map((text: string, index: number) => (
                    <QuizLi onClick={() => onClickVariant(index)} key={index}>{text}</QuizLi>
                ))}
              </ul>
            </>
        )}

        {step >= quizInfo.length || timeUp
          ? <Results quizTime={quizTime} correct={correct} length={quizInfo.length}/>
          : null}
      </QuizContainer>
  );
};

export default QuizPagePreStart;
