import React, {useRoute} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewScreen({route, navigation}) {
  let pageUrl;

  const {params} = route.params;

  if (params) {
    const {
      params: {url},
    } = route.params;
    pageUrl = url;
  } else {
    const {url} = route.params;
    pageUrl = url;
  }

  return <WebView source={{uri: pageUrl}} />;
}
