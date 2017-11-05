import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import ReduxToastr from 'react-redux-toastr';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
          <ReduxToastr  timeOut={3000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-center"
                        transitionIn="bounceInDown"
                        transitionOut="bounceOutUp"/>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
