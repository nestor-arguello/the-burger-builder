import React from 'react';
import styled, {css} from 'styled-components';
import burgerLogo from '../../assets/images/burger-logo.png';

const StyledLogo = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  border-radius: 5px;

  & img {
    height: 100%;
  }

  ${props => props.height && css`
    height: ${props.height};
  `}
`;

const logo = ({...props}) => (
  <StyledLogo {...props}>
    <img src={burgerLogo} alt="Logo Burger" />
  </StyledLogo>
);

export default logo;
