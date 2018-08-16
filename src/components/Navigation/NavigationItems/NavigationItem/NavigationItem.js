import React from 'react';
import styled from 'styled-components';

const StyledNavigationItem = styled.li`
  margin: 10px 0;
  display: block;
  width: 100%;
  & a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    display: block;

    &:hover,
    &:active,
    &.active {
      color: #40a4c8;
    }
  }

  @media (min-width: 500px) {
    & {
      display: flex;
      height: 100%;
      width: auto;
      align-items: center;
    }
    
    & a {
      color: #fff;
      text-decoration: none;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;

      &:hover,
      &:active,
      &.active {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: #fff;
      }  
    }
  }
`;

const navigationItem = ({
  children,
  link,
  active,
  ...props
}) => (
  <StyledNavigationItem>
    <a
      href={link}
      className={active ? 'active' : null}
      {...props}
    >
      {children}
    </a>
  </StyledNavigationItem>
);

export default navigationItem;
