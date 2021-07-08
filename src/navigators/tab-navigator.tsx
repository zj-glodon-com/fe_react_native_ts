import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeNavigator } from '../navigators/home-navigator';
import { SettingNavigator } from '../navigators/setting-navigator';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route: string) => {
  switch (route) {
    case 'Home':
      return 'home-outline';
    case 'Settings':
      return 'settings-outline';

    default:
      return 'home-outline';
  }
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarVisible: route.name === 'Home' || route.name === 'Settings',
        tabBarIcon: ({ color, size }: any) => {
          const iconName: string = getTabBarIcon(route.name);
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}>
      <Tab.Screen name="Home" component={HomeNavigator} options={() => ({ tabBarLabel: '首页' })} />
      <Tab.Screen name="Settings" component={SettingNavigator} options={{ tabBarLabel: '设置' }} />
    </Tab.Navigator>
  );
};
