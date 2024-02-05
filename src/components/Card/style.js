import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px;
    gap: 20px;


    @media (max-width: 1400px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 20px;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr  1fr;
        padding: 20px;
    }
`;

export const StyleCardsContainer = styled.div`
    background-color: #E8E8E8;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;
`;

export const CardTextStyle = styled.p`
    font-size: 20px;
    margin-top: 10px;
    margin-left: 10px;

`;

export const CardTitleStyle = styled.p`
    font-size: 40px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonStyle = styled(NavLink)`
    border: 1px solid black;
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #EE6A95;
    cursor: pointer;
`;
