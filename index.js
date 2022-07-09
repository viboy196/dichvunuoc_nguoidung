/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Login from './app/screens/login';
import Home1Screen from './app/screens/main/TabOneScreen';

import InstallWaterScreen from './app/screens/installWater';
import ReportScreen from './app/screens/report';
import RegisterScreen from './app/screens/register';
import SupportRegisterScreen from './app/screens/register/supportRegister';
import ForgotPasswordScreen from './app/screens/forgotpassword/index';
import AccountDetailScreen from './app/screens/account/accountDetail';
import ChangePasswordScreen from './app/screens/account/changePassword';
import ContractInformation from './app/screens/account/contractinformation';
import receipt from './app/screens/account/receipt';
import waterbill from './app/screens/account/waterbill';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => waterbill);
