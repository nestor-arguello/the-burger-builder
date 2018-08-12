import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import { StyledBurger } from './style';

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingKey => {
      return [...Array(ingredients[ingKey])].map(
        (_, index) => {
          return (
            <BurgerIngredients
              key={ingKey + index}
              type={ingKey}
            />
          );
        }
      );
    })
    .reduce((array, item) => {
      return array.concat(item);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>Please add some ingredients</p>
    );
  }

  return (
    <StyledBurger>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </StyledBurger>
  );
};

export default burger;
