/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Login from './app/screens/login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
