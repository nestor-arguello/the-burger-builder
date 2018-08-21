import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

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

  @media (max-width: 499px) {
    & .DesktopOnly {
      display: none;
    }
  }
`;

const toolbar = ({ drawerToggleClicked, ...props }) => (
  <StyledToolbar {...props}>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </StyledToolbar>
);

export default toolbar;
