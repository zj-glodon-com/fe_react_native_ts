import React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack';
import { Text, Button } from 'react-native';
import { OneScreen, TwoScreen } from '../screens/index';

export type HomeParamList = {
  one: undefined;
  two: { title: String };
};

const Stack = createStackNavigator<HomeParamList>();

const renderTitle = (props: StackHeaderTitleProps) => {
  console.log('renderTitle ==>', props);
  return <Text>自定义title</Text>;
};

const renderBtn = () => <Button onPress={() => console.log('点击左侧按钮')} title="左侧按钮" color="red" />;

export const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      gestureEnabled: true,
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
    <Stack.Screen name="one" component={OneScreen} />
    <Stack.Screen
      name="two"
      component={TwoScreen}
      options={{
        title: 'My home',
        headerStyle: { backgroundColor: '#333' },
        headerTitle: props => renderTitle(props),
        headerRight: () => renderBtn(),
      }}
    />
  </Stack.Navigator>
);

const exitRoutes = ['one', 'two'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
