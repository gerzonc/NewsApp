import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewScreen({route, navigation}) {
  const {
    params: {url},
  } = route.params;
  return <WebView source={{uri: url}} />;
}
