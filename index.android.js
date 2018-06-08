import { AppRegistry } from 'react-native';
import App from './App';
import BackTask from './BackTask';

AppRegistry.registerHeadlessTask("task", ()=>BackTask)

AppRegistry.registerComponent('buttons', () => App);
