import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const StyledToolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 90;

  & nav {
    height: 100%;
  }

  & .Logo {
    height: 80%;
  }
`;

const toolbar = ({ ...props }) => (
  <StyledToolbar {...props}>
    <div>MENU</div>
    <div className="Logo">
      <Logo />
    </div>
    <NavigationItems />
  </StyledToolbar>
);

export default toolbar;
