import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from '../../native/native-views/MapView';

export const ModalScreen = () => {
  const navigation = useNavigation();
  const region = { latitude: 40, longitude: 116.25, latitudeDelta: 0.1, longitudeDelta: 0.1 };

  const onRegionChange = (params: any) => {
    console.log('======onRegionChange==============================');
    console.log(params);
    console.log('======onRegionChange==============================');
  };

  return (
    <View style={styles.container}>
      <Button title="<== 返回首页" onPress={() => navigation.goBack()} />
      <MapView style={styles.mapContainer} region={region} zoomEnabled={false} onRegionChange={onRegionChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    marginTop: 40,
  },
  mapContainer: {
    flex: 1,
  },
});
