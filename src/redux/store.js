import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { navigationMiddleware } from '../navigator';

const crashReporter = store => next => action => {
  try {

    if (action.type == 'Navigation/NAVIGATE') {
      console.log(`Navigate to ${action.routeName}`);
    }
    return next(action);
  } catch (err) {
    return next(action);
  }
};

const middlewares = [
  navigationMiddleware,
  promiseMiddleware(),
  thunk,
  crashReporter
];

// if (__DEV__) { // eslint-disable-line
//   // middlewares.push(createLogger({diff: true}));
// }

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(...middlewares))
);
