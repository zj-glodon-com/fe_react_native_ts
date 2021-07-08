import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './tab-navigator';
import { DrawerScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="tab">
      <Drawer.Screen name="tabs" component={TabNavigator} />
      <Drawer.Screen name="drawer" component={DrawerScreen} />
    </Drawer.Navigator>
  );
};
