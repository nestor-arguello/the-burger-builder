import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled, { css } from 'styled-components';
import Backdrop from '../../UI/Backdrop/Backdrop';

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  transition: transform 0.3s ease-out;

  /* @media (min-width: 500px) {
    & {
      display: none;
    }
  } */

  & .Logo {
    height: 11%;
    margin-bottom: 32px;
  }

  ${props =>
    (props.open &&
    css`
      transform: translateX(0);
    `) ||
    (css`
      transform: translateX(-100%);
    `)};
`;

const sideDrawer = ({ open, closed, ...props }) => {
  return (
    <React.Fragment>
      <Backdrop show={open} clicked={closed} />
      <StyledSideDrawer open={open}>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </StyledSideDrawer>
    </React.Fragment>
  );
};

export default sideDrawer;
