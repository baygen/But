import { DataProtection } from '../../../redux/constants';

const dataProtectionState = {
  status: false,
  time: null
}

export default (state = dataProtectionState, action) => {
  switch (action.type) {
    case DataProtection.SET_TERMS_AGRREDING:
      return {
        ...state,
        // DataProtection: {
          status: action.payload.status,
          time: action.payload.time
        // }
      }
    case DataProtection.SET_DECLINE:
      console.log('DataProtection.SET_DECLINE')
      return {
        ...state,
        // DataProtection: {
          status: false,
          time: action.payload.time
        // }
      }
    default:
      return state;
  }
}