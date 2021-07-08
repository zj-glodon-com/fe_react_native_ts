import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalNavigator } from './modal-navigator';
import { DrawerNavigator } from './drawer-navigator';

export type RootParamList = {
  drawerNavigator: undefined;
  modalStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false, gestureEnabled: true }}>
    <Stack.Screen name="drawerNavigator" component={DrawerNavigator} />
    <Stack.Screen name="modalStack" component={ModalNavigator} />
  </Stack.Navigator>
);

export const RootNavigator = React.forwardRef<NavigationContainerRef, Partial<React.ComponentProps<typeof NavigationContainer>>>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
