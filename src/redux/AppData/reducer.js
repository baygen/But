import { App } from '../constants';

const setup = {
  isFirstLaunch: true
}

export default (state = setup, action) => {
  switch (action.type) {
    case App.SET_IS_FIRST_LAUNCH:
      return {
        ...state,
        isFirstLaunch: action.payload
      }
    default:
      return state;
  }
}