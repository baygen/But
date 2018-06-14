import { NavigationActions, NavigationAction } from 'react-navigation';
import { App, DataProtection, TermsAndConditions } from '../../redux/constants';

export const goTo = (routeName) => async dispatch => {
  // dispatch()
  console.log('LOGIC NAVIGATE goTo')
  await dispatch({ type: DataProtection.SET_DECLINE, payload: 'declined' })
  dispatch(NavigationActions.navigate('TermsAndConditionsMain'))
}