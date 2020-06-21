import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {getReverseCode, getTopHeadlines} from '../../api/getRequest';
import {GOOGLE_API_KEY} from 'react-native-dotenv';
import axios from 'axios';
import ListView from '../../components/ListView';

export default function NewsModal({route, navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const {
    params: {latitude, longitude},
  } = route.params;
  useEffect(() => {
    const source = axios.CancelToken.source();
    getReverseCode(latitude, longitude, GOOGLE_API_KEY)
      .then((countryCode) => getTopHeadlines(countryCode))
      .then(({articles}) => {
        setIsLoading(false);
        setData(articles);
      });
    return () => {
      source.cancel();
    };
  }, [latitude, longitude]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : data.length ? (
        <ListView data={data} />
      ) : (
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          No news to show from here!
        </Text>
      )}
    </View>
  );
}
