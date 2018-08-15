import React from 'react';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const MainContainer = styled.main`
  margin-top: 72px;
`;

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <MainContainer>{props.children}</MainContainer>
  </React.Fragment>
);

export default layout;
