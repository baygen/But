import { App } from '../constants';

export const setIsFirstTimeAppLaunched = (status) =>(
  {
    type: App.SET_IS_FIRST_LAUNCH,
    payload: status
  }
)