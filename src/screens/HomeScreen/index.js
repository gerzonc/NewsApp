import React from 'react';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import {markers} from '../../api/db';

export default function HomeScreen({navigation}) {
  const mapMarkers = () => {
    return markers.map((marker) => {
      return (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={'Click here to check the news!'}
          onPress={() => {
            navigation.navigate('News', {
              params: {latitude: marker.latitude, longitude: marker.longitude},
            });
          }}
        />
      );
    });
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 18.9642525,
        longitude: -70.508917,
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}>
      {mapMarkers()}
    </MapView>
  );
}
