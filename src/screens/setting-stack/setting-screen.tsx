import React, { useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { jsCallNative, nativeCallback, nativePromise, calendarManagerEmitter } from '../../native/native-modules/CalendarManager';

export const SettingScreen = () => {
  const fun1 = useCallback(() => {
    const name = '刘贵成';
    const details: Object = {
      location: '北京 故宫',
      date: new Date(),
    };
    jsCallNative(name, details);
  }, []);

  const fun2 = useCallback(() => {
    const details: Object = {
      name: '刘贵成',
      location: '北京 故宫',
      date: new Date(),
    };

    nativeCallback(details, (error: Error, events: Array<any>) => {
      console.log('==========nativeCallback==========================');
      console.log(error, events);
      console.log('==========nativeCallback==========================');
    });
  }, []);

  const fun3 = useCallback(async () => {
    const details: Object = {
      name: '刘贵成',
      location: '北京 故宫',
      date: new Date(),
    };
    try {
      const events = await nativePromise(details);
      console.log('==========nativePromise==========================');
      console.log(events);
      console.log('==========nativePromise==========================');
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const subscription = calendarManagerEmitter.addListener('EventReminder', reminder => {
      console.log('==========native call js==========================');
      console.log(reminder.name);
      console.log('==========native call js==========================');
    });
    return () => {
      // 别忘了取消订阅，通常在componentWillUnmount生命周期方法中实现。
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>设置页面</Text>
      <Button onPress={fun1} title="js ==> native && native =>[通知] js" />
      <Button onPress={fun2} title="js ==> native => callback" />
      <Button onPress={fun3} title="js ==> native => back => promise" />
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
