import React from 'react';
import { Image, StyleSheet, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

import DrawerContent from '../components/DrawerContent';

const AppDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    drawerPosition: 'right',
    drawerBackgroundColor: '#eee',
    hideStatusBar: true,
    contentComponent: DrawerContent,
    contentOptions: {
      itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  }
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App: AppDrawer,
      Auth: SignIn,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

export default Routes;
