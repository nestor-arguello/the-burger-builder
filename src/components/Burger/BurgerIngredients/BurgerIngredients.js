import React from 'react';
import styled from 'styled-components';

import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon
} from './style';

const burgerIngredient = props => {
  const ingredient = {
    'bread-botton': () => <BreadBottom />,
    'bread-top': () => (
      <BreadTop>
        <Seeds1 />
        <Seeds2 />
      </BreadTop>
    ),
    meat: () => <Meat />,
    cheese: () => <Cheese />,
    salad: () => <Salad />,
    bacon: () => <Bacon />
  };

  return ingredient['bread-botton']();
};

export default burgerIngredient;
