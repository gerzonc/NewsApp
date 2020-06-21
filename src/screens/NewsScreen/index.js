import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {getEverything} from '../../api/getRequest';
import styles from './styles';
import axios from 'axios';
import ListView from '../../components/ListView';

export default function NewsScreen({route, navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    getEverything().then(({articles}) => {
      setIsLoading(false);
      setData(articles);
    });
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <ListView data={data} />}
    </View>
  );
}
