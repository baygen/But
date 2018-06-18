import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoadingScreen from '../screens/AppLoading';
// Setup screens
import DataProtection from '../screens/DataProtection';
// import PersonalDetails from '../screens/PersonalDetails';
import TermsAndConditions from '../screens/TermsAndConditions';

// Main screens
// import Menu from '../screens/menu';
// Menu screens
// import Notifications from '../screens/Notifications';
// import Pods from '../screens/Pods';
// Peronal details screen has tobe in the Menu as well

// // Other screens
// import JoinPodCode from '../screens/JoinPodCode';
import JoinPodQRScan from '../screens/JoinPodQRScan';
// import TimerSetUp from '../screens/TimerSetUp';
// // import AlertTrigger from '../screens/AlertTrigger';
// import AlertNotification from '../screens/AlertNotification';
// import AlertMap from '../screens/AlertMap';
// import JoinPodNotification from '../screens/JoinPodNotification';
// import MessageNotification from '../screens/MessageNotification';
// import BecomeResponerNotification from '../screens/BecomeResponerNotification';


const MenuNavigator = createDrawerNavigator({
  //   Notifications: { screen: Notifications },
  //   Pods: { screen: Pods },
  //   PersonalDetails: { screen: PersonalDetails }
  DataProtection: { screen: DataProtection },
  JoinPodQRScan: { screen: JoinPodQRScan },
  TermsAndConditionsMain: { screen: TermsAndConditions },
  AppLoading: { screen: LoadingScreen }
},
{
  //     drawerWidth: Dimensions.get("window").width,
  //     contentComponent: Menu
});

const MainAppNavigator = createStackNavigator({
  Menu: { screen: MenuNavigator },
  JoinPodQRScan: { screen: JoinPodQRScan },
  TermsAndConditionsMain: { screen: TermsAndConditions }
}, {
  headerMode: 'none'
});

const SetupNavigator = createStackNavigator({
  DataProtection: { screen: DataProtection },
  // PersonalDetails: { screen: PersonalDetails },
  TermsAndConditions: { screen: TermsAndConditions }
}, {
  headerMode: 'none'
});

export default createSwitchNavigator(
  {
    loading: LoadingScreen,
    app: MainAppNavigator,
    setup: SetupNavigator,
  },
  {
    initialRouteName: 'loading'
  }
);
