import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createNavigationReducer,               // handles #2 above
  createReactNavigationReduxMiddleware,  // handles #4 above
  reduxifyNavigator
} from 'react-navigation-redux-helpers';

import AppRoutes from './routes';

export const navigationReducer = createNavigationReducer(AppRoutes);

// Note: createReactNavigationReduxMiddleware must be run before createNavigationPropConstructor
export const navigationMiddleware = createReactNavigationReduxMiddleware(
  "app",
  state => state.navigation
);

const AppNavigator = reduxifyNavigator( AppRoutes, "app")

@connect(state => ({
  navigation: state.navigation
}))
export default class Navigation extends Component {

  render() {
    const { dispatch, navigation } = this.props;
    return <AppNavigator state={navigation} dispatch={dispatch} />
  }
};
