import React, { useLayoutEffect, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

export const OneScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: '首页', headerShown: false });
  }, [navigation, route]);

  useFocusEffect(() => {
    console.log('===========useFocusEffect=========================');
  });

  useEffect(() => {
    console.log('===========useEffect=========================');
  });

  return (
    <View style={styles.container}>
      <Button title="==> 详情页" onPress={() => navigation.navigate('two', { title: '首页传过来的标题' })} />
      <Button title="==> Modal" onPress={() => navigation.navigate('modalStack')} />
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
