import React, { Component } from 'react';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const MainContainer = styled.main`
  padding-top: 72px;
`;

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  handleCloseSideDrawer = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.handleCloseSideDrawer}
        />
        <MainContainer>{this.props.children}</MainContainer>
      </React.Fragment>
    );
  }
}

export default Layout;
