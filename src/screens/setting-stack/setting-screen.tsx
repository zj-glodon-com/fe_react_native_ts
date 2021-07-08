import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>设置页面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
