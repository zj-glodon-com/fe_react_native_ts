//
//  ZJMapView.h
//  fe_react_native_ts
//
//  Created by liutt-d on 2021/7/11.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface ZJMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END
