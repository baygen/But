import { AppRegistry, Platform } from 'react-native';
import App from './App';
import BackTask from './BackTask';

if (Platform.OS === 'android') {
  // Register Android specific task here
  AppRegistry.registerHeadlessTask("task", ()=>BackTask)
} else if (Platform.OS === 'ios') {
// Register IOS specific task here
}

AppRegistry.registerComponent('buttons', () => App);
