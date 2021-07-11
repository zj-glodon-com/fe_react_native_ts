//
//  ZJMapViewManager.h
//  fe_react_native_ts
//
//  Created by liutt-d on 2021/7/11.
//

#import <React/RCTViewManager.h>
#import <MapKit/MapKit.h>
#import "ZJMapView.h"
#import "RCTConvert+Mapkit.h"

NS_ASSUME_NONNULL_BEGIN

@interface ZJMapViewManager : RCTViewManager <MKMapViewDelegate>

@end

NS_ASSUME_NONNULL_END
