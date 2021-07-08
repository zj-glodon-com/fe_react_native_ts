import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TwoScreenProps, TwoScreenRouteProp } from './two-screen.type';

export const TwoScreen = (props: TwoScreenProps) => {
  const navigation = useNavigation();
  const route: TwoScreenRouteProp = useRoute();

  useLayoutEffect(() => {
    const { title: headerTitle = '' } = props.route.params;
    navigation.setOptions({ headerTitle });
  }, [navigation, props]);

  useEffect(() => {
    console.log('===========useEffect=========================');
    console.log(route.params);
    console.log('===========useEffect=========================');
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <Text>详情页面</Text>
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
