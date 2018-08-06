import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  margin-top: 16px;
`;

const layout = props => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <MainContainer>{props.children}</MainContainer>
  </React.Fragment>
);

export default layout;
