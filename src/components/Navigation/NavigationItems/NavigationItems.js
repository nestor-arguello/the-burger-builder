import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';

const StyledNavigationItems = styled.ul`
  /* margin: 0;
  padding: 0; */
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    & {
      flex-flow: row;
    }
  }
`;

const navigationItems = () => (
  <StyledNavigationItems>
    <NavigationItem link="#" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="#">Checkout</NavigationItem>
  </StyledNavigationItems>
);

export default navigationItems;
