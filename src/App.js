/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Splash from './screens/Splash';
import DrawerNavigation from './components/DrawerNavigation';

const Auth = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: Signup,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    },
  },
});

const App = createSwitchNavigator({
  SplashScreen: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Auth: {
    screen: Auth,
  },
  DrawerNavigation: {
    screen: DrawerNavigation,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(App);
