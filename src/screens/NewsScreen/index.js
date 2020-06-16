import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getEverything} from '../../api/getRequest';
import styles from './styles';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

export default function NewsScreen() {
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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(news) => news.title}
          renderItem={({item, index}) => {
            return (
              <ScrollView
                style={[
                  {
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                  },
                ]}>
                <TouchableOpacity>
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        borderWidth: 0.5,
                      },
                    ]}>
                    <FastImage
                      style={{
                        width: 150,
                        height: 100 /*resizeMode: 'stretch' */,
                      }}
                      source={{
                        uri: item.urlToImage,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <View
                      style={{
                        flexShrink: 1,
                        paddingLeft: 8,
                        marginVertical: 6,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          }}
        />
      )}
    </View>
  );
}
