import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { navigationMiddleware } from '../navigator';

const crashReporter = store => next => action => {
  try {
    console.log(Object.keys(store));
    return next(action);
  } catch (err) {
    // console.error('Caught an exception! for ', action.type,'\n');
    return next(action);
    // throw err
  }
};

const middlewares = [
  crashReporter,
  navigationMiddleware,
  promiseMiddleware(),
  thunk
];

// if (__DEV__) { // eslint-disable-line
//   // middlewares.push(createLogger({diff: true}));
// }

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(...middlewares))
);
