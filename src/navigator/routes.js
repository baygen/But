import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoadingScreen from '../screens/AppLoading';
import LoadingScreen1 from '../screens/AppLoading.1';
import LoadingScreen2 from '../screens/AppLoading.2';
// Setup screens
import DataProtection from '../screens/DataProtection';
import PersonalDetails from '../screens/Profile';
import TermsAndConditions from '../screens/TermsAndConditions';

// Main screens
// import Menu from '../screens/menu';
// Menu screens
// import Notifications from '../screens/Notifications';
// import Pods from '../screens/Pods';
// Peronal details screen has to be in the Menu as well

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

const ROUTES = {
  JoinPodQRScan: 'JoinPodQRScan',
  LoadingScreen1: 'LoadingScreen1',
  LoadingScreen2: 'LoadingScreen2',
  Menu: 'Menu',
  Profile: 'Profile',
  DataProtection: 'DataProtection',
  TermsAndConditions: 'TermsAndConditions',
  PersonalDetails: 'PersonalDetails',
  AppLoadingPage: 'loading',
  AppRoot: 'app',
  SetupFlow: 'setup'
};

const MenuNavigator = createDrawerNavigator({
  //   Notifications: { screen: Notifications },
  //   Pods: { screen: Pods },
  // DataProtection: { screen: DataProtection },
  [ROUTES.JoinPodQRScan]: {
    screen: JoinPodQRScan
  },
  [ROUTES.LoadingScreen1]: {
    screen: LoadingScreen1
  },
  [ROUTES.LoadingScreen2]: {
    screen: LoadingScreen2
  },
  // TermsAndConditionsMain: { screen: TermsAndConditions },
  // AppLoading: { screen: LoadingScreen }
},
{
  initialRouteName: 'JoinPodQRScan'
  //     drawerWidth: Dimensions.get("window").width,
  //     contentComponent: Menu
});

const MainAppNavigator = createStackNavigator({
  [ROUTES.Menu]: { screen: MenuNavigator },
  [ROUTES.Profile]: { screen: PersonalDetails }
}, {
  headerMode: 'none'
});

const SetupNavigator = createStackNavigator({
  [ROUTES.DataProtection]: { screen: DataProtection },
  [ROUTES.TermsAndConditions]: { screen: TermsAndConditions },
  [ROUTES.PersonalDetails]: { screen: PersonalDetails }
}, {
  headerMode: 'none'
});

export default createSwitchNavigator(
  {
    [ROUTES.AppLoadingPage]: LoadingScreen,
    [ROUTES.AppRoot]: MainAppNavigator,
    [ROUTES.SetupFlow]: SetupNavigator,
  },
  {
    initialRouteName: ROUTES.AppLoadingPage
  }
);

export const SCREENS = ROUTES;
