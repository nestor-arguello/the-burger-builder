import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import { StyledBurger } from './style';

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map(ingKey => {
    return [...Array(ingredients[ingKey])].map((_, index) => {
      return <BurgerIngredients key={ingKey + index} type={ingKey} />;
    });
  });

  return (
    <StyledBurger>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </StyledBurger>
  );
};

export default burger;
