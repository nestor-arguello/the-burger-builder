import React from 'react';
import styled from 'styled-components'
import Logo from '../../Logo/Logo'

const StyledToolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 90;

  & nav {
    height: 100%;

  }
`

const toolbar = ({ ...props }) => (
  <StyledToolbar {...props}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </StyledToolbar>
);

export default toolbar;
