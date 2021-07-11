import React, { useLayoutEffect, useEffect, useCallback } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import UserApi from '../../../api/zhyx/user/userApi';

export const OneScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const getVerifyCode = useCallback(async () => {
    const mobile = '18701641157';
    const data = await UserApi.getVerifyCode({ mobile });
    console.log('==========getVerifyCode==========================');
    console.log(data);
    console.log('==========getVerifyCode==========================');
  }, []);

  const login = useCallback(async () => {
    const mobile = '18701641157';
    const code = '123456';
    const data = await UserApi.login({ mobile, code });
    console.log('==========login==========================');
    console.log(data);
    console.log('==========login==========================');
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: '首页', headerShown: false });
  }, [navigation, route]);

  useFocusEffect(() => {
    console.log('===========useFocusEffect=========================');
  });

  useEffect(() => {
    console.log('===========useEffect=========================');
    getVerifyCode();
    login();
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
