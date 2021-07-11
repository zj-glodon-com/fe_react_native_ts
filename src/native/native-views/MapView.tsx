// MapView.js
import React, { ComponentClass } from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, StyleSheet } from 'react-native';

export interface ZJMapViewProps {
  [propName: string]: any;
}

const ZJMapView: any = requireNativeComponent('ZJMapView');

class MapView extends React.Component<ZJMapViewProps> {
  onRegionChange = (event: any) => {
    if (!this.props.onRegionChange) {
      return;
    }
    // process raw event...
    this.props.onRegionChange(event.nativeEvent);
  };

  render() {
    return <ZJMapView style={styles.mapContainer} {...this.props} onRegionChange={this.onRegionChange} />;
  }
}

(MapView as ComponentClass).propTypes = {
  /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
  zoomEnabled: PropTypes.bool,

  /**
   * 地图要显示的区域。
   *
   * 区域由中心点坐标和区域范围坐标来定义。
   *
   */
  region: PropTypes.shape({
    /**
     * 地图中心点的坐标。
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    /**
     * 最小/最大经、纬度间的距离。
     *
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),
  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  onRegionChange: PropTypes.func,
};

export default MapView;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
});
