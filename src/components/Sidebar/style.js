import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarStyle = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 300px;
    border-right: 2px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const QuizCreate = styled(NavLink)`
    text-decoration: none;
    font-size: 15px;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid black;
    background-color: pink;
    margin: 10px;
`;

export const QuizFavorite = styled(NavLink)`
    text-decoration: none;
    font-size: 15px;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid black;
    background-color: pink;
    margin-bottom: 10px;
`;

export const InputStyle = styled.input`
    padding: 10px 15px;
`;
