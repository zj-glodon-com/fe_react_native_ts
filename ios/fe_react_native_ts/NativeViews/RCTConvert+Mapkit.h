//
//  RCTConvert+Mapkit.h
//  fe_react_native_ts
//
//  Created by liutt-d on 2021/7/11.
//

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>


NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

NS_ASSUME_NONNULL_END
