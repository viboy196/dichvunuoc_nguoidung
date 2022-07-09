/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Login from './app/screens/login';
import InstallWaterScreen from './app/screens/installWater';
import ReportScreen from './app/screens/report';
import RegisterScreen from './app/screens/register';
import SupportRegisterScreen from './app/screens/register/supportRegister';
import ForgotPasswordScreen from './app/screens/forgotpassword/index';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ForgotPasswordScreen);
