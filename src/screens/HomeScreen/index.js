import React from 'react';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

export default function HomeScreen({navigation}) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 18.9642525,
        longitude: -70.508917,
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}
      onPress={(e) => {
        const {
          coordinate: {latitude, longitude},
        } = e.nativeEvent;
        navigation.navigate('News', {
          params: {latitude, longitude},
        });
      }}
    />
  );
}
