import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getReverseCode, getTopHeadlines} from '../../api/getRequest';
import {GOOGLE_API_KEY} from 'react-native-dotenv';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

export default function NewsModal({route, navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log;
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
        <FlatList
          data={data}
          keyExtractor={(news) => news.publishedAt + news.title}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <ScrollView
                style={[
                  {
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Web', {params: {url: item.url}})
                  }>
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
                        paddingHorizontal: 8,
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
      ) : (
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          No news to show from this country!
        </Text>
      )}
    </View>
  );
}
