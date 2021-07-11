/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef } from 'react';
import { View, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainerRef } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RootNavigator } from './navigators/root-navigator';

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RootSiblingParent>
      <View style={[backgroundStyle, styles.container]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator ref={navigationRef as any} />
      </View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
