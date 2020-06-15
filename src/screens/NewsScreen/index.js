import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import NewsAPI from '../../api/config';

export default function NewsScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>NewsScreen</Text>
    </View>
  );
}
