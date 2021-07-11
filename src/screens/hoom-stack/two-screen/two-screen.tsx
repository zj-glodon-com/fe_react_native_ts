import React, { useLayoutEffect, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TwoScreenProps, TwoScreenRouteProp } from './two-screen.type';

import { connect } from 'react-redux';
import UserActions from '../../../store/UserRedux';

const TwoView = (props: TwoScreenProps) => {
  const navigation = useNavigation();
  const route: TwoScreenRouteProp = useRoute();
  // Actions
  const { login, userInfo } = props as any;

  const doLogin = useCallback(() => {
    // const data = await UserApi.login(mobile, code);
    const mobile = '18701641157';
    const code = '123456';
    login({ mobile, code });
  }, [login]);

  useLayoutEffect(() => {
    const { title: headerTitle = '' } = props.route.params;
    navigation.setOptions({ headerTitle });
  }, [navigation, props]);

  useEffect(() => {
    console.log('===========useEffect=========================');
    console.log(route.params);
    console.log('===========useEffect=========================');
    doLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <Text>详情页面</Text>
      <Text>{JSON.stringify(userInfo)}</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const {
    user: { userInfo },
  } = state;
  return { userInfo };
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: any) => dispatch(UserActions.loginRequest(params)),
});

export const TwoScreen = connect(mapStateToProps, mapDispatchToProps)(TwoView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
