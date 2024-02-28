import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleTitle = styled(NavLink)`
    color: #4535AA;
    text-decoration: none;
    font-weight: bold;
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
