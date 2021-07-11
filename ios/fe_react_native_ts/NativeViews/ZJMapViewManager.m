//
//  ZJMapViewManager.m
//  fe_react_native_ts
//
//  Created by liutt-d on 2021/7/11.
//

#import "ZJMapViewManager.h"

@implementation ZJMapViewManager

RCT_EXPORT_MODULE(ZJMapView)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL);
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

- (UIView *)view {
  ZJMapView *map = [ZJMapView new];
  map.delegate = self;
  return map;
}

#pragma mark MKMapViewDelegate

- (void)mapView:(ZJMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
  if (!mapView.onRegionChange) {
    return;
  }
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
    @"region": @{
      @"latitude": @(region.center.latitude),
      @"longitude": @(region.center.longitude),
      @"latitudeDelta": @(region.span.latitudeDelta),
      @"longitudeDelta": @(region.span.longitudeDelta),
    }
  });
}

@end
