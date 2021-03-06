<h1 align="center">
  NewsApp
</h1>

<p align="center">An app that let's you read news from countries using the News API and Google Maps Platform!</p>

### Table of Contents
  * [Installation and usage](#installation)
  * [Screenshots](#screenshot)
  * [Libraries](#libraries)
  * [Legal](#legal)

## <a name="installation"></a> Installation and usage

Make sure you have [npm](https://nodejs.org/en/) installed. For installing this project on your machine just clone the project and run in the console: 
```console
$ yarn install
```
or
```console
$ npm install
```
You should get your API key from [News API](https://newsapi.org/docs/get-started) and [Google Maps Platform](https://developers.google.com/maps/documentation) and create a `.env` file in the root directory like this:
```
NEWS_API = YOUR_NEWS_API_KEY
GOOGLE_API_KEY = YOUR_GOOGLE_API_KEY
```

Once you've done all the process explained above, run:
```console
$ npx react-native run-android
```
or
```console
$ npx react-native run-ios
```

## <a name="screenshot"></a> Screenshots

<p align="center">
   <img src="1.gif" width="350"/>
   <img src="2.gif" width="350"/>
</p>

## <a name="libraries"></a> Libraries
  * [react-navigation](https://github.com/react-navigation/react-navigation)
  * [react-native-webview](https://github.com/react-native-community/react-native-webview)
  * [axios](https://github.com/qiangmao/axios)
  * [react-native-maps](https://github.com/react-native-community/react-native-maps)
  * [react-native-dotenv](https://github.com/zetachang/react-native-dotenv)
  * [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
  * [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
  * [News API](https://newsapi.org/docs/get-started)
  * [Google Maps Platform](https://developers.google.com/maps/documentation)

## <a name="legal"> </a> Legal

This project was created only for testing purposes and it has no relationship with any website shown in this app.
