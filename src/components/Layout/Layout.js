import React from 'react';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const MainContainer = styled.main`
  margin-top: 72px;
`;

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <MainContainer>{props.children}</MainContainer>
  </React.Fragment>
);

export default layout;
