import styled from 'styled-components';

export const StyleTitle = styled.h1`
    color: #4535AA;
    display: flex;
    justify-content: center;
    font-size: 140px;

    @media (max-width: 900px) {
        font-size: 100px;
    }

    @media (max-width: 445px) {
        font-size: 70px;
    }
`;
