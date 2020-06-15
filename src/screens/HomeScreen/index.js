import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import {markers} from '../../api/db';
import {GOOGLE_API_KEY} from 'react-native-dotenv';
import getReverseCode from '../../api/config';
import axios from 'axios';

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export default function HomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 18.9642525,
        longitude: -70.508917,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        onPress={async (e) => {
          // console.log(
          //   markers[0].coordinate.latitude,
          //   markers[0].coordinate.longitude,
          //   GOOGLE_API_KEY,
          // );
          e.stopPropagation();
          navigation.navigate('MyModal');
        }}
        coordinate={markers[0].coordinate}
        title={markers[0].title}
        description={'Click here to check the news!'}
      />
      <Marker
        coordinate={markers[1].coordinate}
        title={markers[1].title}
        description={'Click here to check the news!'}
      />
      <Marker
        coordinate={markers[2].coordinate}
        title={markers[2].title}
        description={'Click here to check the news!'}
      />
      <Marker
        coordinate={markers[3].coordinate}
        title={markers[3].title}
        description={'Click here to check the news!'}
      />
      <Marker
        coordinate={markers[4].coordinate}
        title={markers[4].title}
        description={'Click here to check the news!'}
      />
      <Marker
        coordinate={markers[5].coordinate}
        title={markers[5].title}
        description={'Click here to check the news!'}
      />
    </MapView>
  );
}
