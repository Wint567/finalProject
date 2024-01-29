import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const QuizContainer = styled.div`
    width: 600px;
    height: 500px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
`;

export const Time = styled.p`
    font-size: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #EE6A95;
    cursor: pointer;
`;

export const QuizLi = styled.li`
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: lightgray;
    cursor: pointer;
    margin: 10px;
`;

export const ResultsTitle = styled.h2`
    font-size: 25px;
    margin-bottom: 10px;
`;

export const EndButton = styled(NavLink)`
    padding: 10px 15px;
    border: 1px solid black;
    text-decoration: none;
    border-radius: 50px;
    margin-top: 10px;
    color: black;
    background-color: #EE6A95;
`;
