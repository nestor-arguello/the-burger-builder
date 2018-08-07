import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import { StyledBurger } from './style';

const burger = props => {
  return (
    <StyledBurger>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bread-bottom" />
    </StyledBurger>
  );
};

export default burger;
