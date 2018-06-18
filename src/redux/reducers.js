import { combineReducers } from 'redux';

import { navigationReducer } from '../navigator';
import termsAndCondition from '../screens/TermsAndConditions/redux/reducer';
import dataProtection from '../screens/DataProtection/redux/reducer';
import app from './AppData/reducer';

export default combineReducers({
  navigation: navigationReducer,
  termsAndCondition,
  dataProtection,
  app
});
