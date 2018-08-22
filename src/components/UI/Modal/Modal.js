import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styled, { css } from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transform: translateY(-100vh);
  opacity: 0;
  transition: all 0.3s ease-out;

  ${props =>
    props.show &&
    css`
      transform: translateY(0);
      opacity: 1;
    `} @media (min-width: 600px) {
    & {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;

class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[Moda] WillUpdate');
  }

  render() {
    const { children, show, modalClosed } = this.props;

    return (
      <React.Fragment>
        <StyledModal show={show}>{children}</StyledModal>
        <Backdrop show={show} clicked={modalClosed} />
      </React.Fragment>
    );
  }
}

export default Modal;
