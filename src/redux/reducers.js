import { combineReducers } from 'redux';

import navigationReducer from '../navigator/reducer';
import homeReducer from '../views/home/redux/reducer';

export default combineReducers({
	navigation: navigationReducer,
  home: homeReducer
});
