import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
// import axios from 'axios';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error });
        }
      );
    }

    handleErrorConfirmed = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.handleErrorConfirmed}
          >
            {this.state.error
              ? this.state.error.message
              : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
