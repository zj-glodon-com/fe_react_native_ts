import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalScreen } from '../screens';

export type modalParamList = {
  modal: undefined;
};

const Stack = createStackNavigator<modalParamList>();

export const ModalNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
    <Stack.Screen name="modal" component={ModalScreen} />
  </Stack.Navigator>
);

const exitRoutes = ['modal'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
