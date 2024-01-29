import React from 'react';
import {
  InputStyle,
  QuizCreate,
  QuizFavorite,
  SidebarStyle,
} from './style';

const Sidebar = () => (
    <SidebarStyle>
      <InputStyle placeholder='Search field '/>
      <QuizCreate to='quiz/create'>
          Quiz create
      </QuizCreate>
      <QuizFavorite to='quiz/favorite'>
          Quiz favorite
      </QuizFavorite>
    </SidebarStyle>
);

export default Sidebar;
