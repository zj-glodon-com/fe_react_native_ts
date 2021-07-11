import { NativeModules, NativeEventEmitter } from 'react-native';

const CalendarManager = NativeModules.CalendarManager;

export const jsCallNative = (name: string, details: Object = {}) => {
  // string(NSString);
  // number (NSInteger, float, double, CGFloat, NSNumber)
  // boolean (BOOL, NSNumber)
  // array (NSArray) 可包含本列表中任意类型
  // object (NSDictionary) 可包含 string 类型的键和本列表中任意类型的值
  // function (RCTResponseSenderBlock)
  CalendarManager.addEvent(name, details);
};

export const nativeCallback = (params: Object, callback: Function) => {
  CalendarManager.findEvents(params, (error: Error, events: Array<any>) => {
    callback(error, events);
  });
};

export const nativePromise = async (params: Object) => {
  try {
    return await CalendarManager.updateEvents(params);
  } catch (error) {
    console.log(error);
  }
};

export const calendarManagerEmitter = new NativeEventEmitter(CalendarManager);
