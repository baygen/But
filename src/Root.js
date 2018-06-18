import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator';
import store from './redux/store';

export default class RootComponent extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
