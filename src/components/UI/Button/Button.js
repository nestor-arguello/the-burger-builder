import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  ${props =>
    props.Succes &&
    css`
      color: #5c9210;
    `}

  ${props =>
    props.Danger &&
    css`
      color: #944317;
    `}

  }};
`;

const button = ({ clicked, children, ...props }) => (
  <StyledButton onClick={clicked} {...props} >
    {children}
  </StyledButton>
);

export default button;
