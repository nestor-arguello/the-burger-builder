import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../../assets/images/burger-logo.png';

const StyledLogo = styled.div`
  background-color: white;
  padding: 8px;
  height: 80%;
  border-radius: 5px;

  & img {
    height: 100%;
  }
`;

const logo = () => (
  <StyledLogo>
    <img src={burgerLogo} alt="Logo Burger" />
  </StyledLogo>
);

export default logo;
