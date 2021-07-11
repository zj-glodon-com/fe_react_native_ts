//
//  RCTConvert+Mapkit.m
//  fe_react_native_ts
//
//  Created by liutt-d on 2021/7/11.
//

#import "RCTConvert+Mapkit.h"

@implementation RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json {
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json {
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end
