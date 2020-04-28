/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent('detoxCucumber', () => App);
AppRegistry.registerComponent(appName, () => App);
