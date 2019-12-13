import React from 'react';
import { Image, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Routes = createAppContainer(
  createDrawerNavigator({
    SignIn: {
      screen: SignIn,
    },
    Home: {
      screen: Home,
    },
  })
);

export default Routes;
