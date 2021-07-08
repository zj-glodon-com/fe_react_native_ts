import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DrawerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>抽屉</Text>
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
