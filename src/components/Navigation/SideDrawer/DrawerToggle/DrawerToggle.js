import React from 'react';
import styled from 'styled-components';

const StyledDrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  & div {
    width: 90%;
    height: 3px;
    background-color: white;
  }
`;

const drawerToggle = ({ clicked, ...props }) => (
  <StyledDrawerToggle onClick={clicked} {...props}>
    <div />
    <div />
    <div />
  </StyledDrawerToggle>
);
export default drawerToggle;