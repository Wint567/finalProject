import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const CardsContainer = styled.div`
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
