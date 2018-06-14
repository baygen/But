import { TermsAndConditions } from '../../../redux/constants';

const termsAndConditiosState = {
  status: false,
  time: null,
  appIsLaunched: false
}

export default (state = termsAndConditiosState, action) => {
  switch (action.type) {
    case TermsAndConditions.APP_STARTED:
      return {
        ...state,
        appIsLaunched: true
      }
    case TermsAndConditions.SET_TERMS_AGRREDING:
      return {
        ...state,
        // termsAndConditions: {
          status: action.payload.status,
          time: action.payload.time
        // }
      }
    case TermsAndConditions.SET_DECLINE:
      console.log('TermsAndConditions.SET_DECLINE')
      return {
        ...state,
        // termsAndConditions: {
          status: action.payload.status,
          time: action.payload.time
        // }
      }
    default:
      return state
  }
}