import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const crashReporter = store => next => action => {
  try {
    return next(action)

  } catch (err) {
    console.error('Caught an exception! for ', action.type,'\n')
    return next(action);
    // throw err
  }
}

const middlewares = [
	crashReporter,
  promiseMiddleware(),
  thunk
];

// if (__DEV__) { // eslint-disable-line
//   // middlewares.push(createLogger({diff: true}));
// }

export default createStore(reducers, {},
  compose(applyMiddleware(...middlewares))
);
