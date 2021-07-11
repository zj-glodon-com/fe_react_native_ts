//
//  CalendarManager.m
//  fe_react_native_ts
//
//  Created by liutt-d on 2021/7/11.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation CalendarManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

- (NSArray<NSString *> *)supportedEvents {
  return @[@"EventReminder"];
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details) {
  // Date is ready to use!
  // location:(NSString *)location
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *date = [RCTConvert NSDate:details[@"date"]];
  RCTLogInfo(@"JS ==> iOS Native 姓名:%@  地址:%@  时间:%@", name, location, date);
  [self sendEventWithName:@"EventReminder" body:@{@"name": @{@"key001":@"value001"}}];
}

RCT_EXPORT_METHOD(findEvents:(NSDictionary *)details callback:(RCTResponseSenderBlock)callback) {
  NSString *name = [RCTConvert NSString:details[@"name"]];
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *date = [RCTConvert NSDate:details[@"date"]];
  
  //用于格式化NSDate对象
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  //设置格式：zzz表示时区
  [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss zzz"];
  //NSDate转NSString
  NSString *dateString = [dateFormatter stringFromDate:date];
  
  NSArray *events = @[name, location, @{@"time":dateString}, @"刘老贵 666"];
  callback(@[[NSNull null], events]);
}

RCT_REMAP_METHOD(updateEvents,
                 details:(NSDictionary *)details
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
  NSString *name = [RCTConvert NSString:details[@"name"]];
  NSString *location = [RCTConvert NSString:details[@"location"]];
  
  NSArray *events = @[name, location, @{@"info":@"刘老贵 666"}];
  if (events) {
    resolve(events);
  } else {
    NSError *error = [NSError new];
    reject(@"no_events", @"There were no events", error);
  }
}

@end
