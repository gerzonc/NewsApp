import React from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useRoute, useNavigation} from '@react-navigation/native';

export default function ListView({data}) {
  const route = useRoute(),
    navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(news) => news.publishedAt + news.title}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        const normalisedSource =
          item &&
          typeof item.urlToImage === 'string' &&
          !item.urlToImage.split('http')[1]
            ? null
            : item.urlToImage;
        return (
          <ScrollView
            style={[
              {
                paddingHorizontal: 15,
                paddingVertical: 10,
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
               
                route.name === 'News'
                  ? navigation.navigate('Main', {
                      screen: 'Web',
                      params: {url: item.url},
                    })
                  : navigation.push('Web', {params: {url: item.url}});
              }}>
              <View
                style={[
                  {
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    borderWidth: 0.5,
                  },
                ]}>
                {item.urlToImage ? (
                  <FastImage
                    style={{
                      width: 150,
                      height: 100,
                    }}
                    source={{
                      uri: normalisedSource,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                ) : null}
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
  );
}
