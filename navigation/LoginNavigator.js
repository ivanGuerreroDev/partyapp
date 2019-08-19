import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import indexScreen from '../screens/indexScreen';
import IntroAppScreen from '../screens/IntroAppScreen';
const LoginNavigator = createAppContainer(createStackNavigator({
  intro: {
    screen: IntroAppScreen
  },
  index: {
    screen: indexScreen
  },
  Login: {
      screen: LoginScreen
  },
  Register: {
      screen:  RegisterScreen
  },

}));
export default LoginNavigator;