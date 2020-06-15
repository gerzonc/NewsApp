import {NEWS_API, GOOGLE_API_KEY} from 'react-native-dotenv';
import axios from 'axios';

async function getReverseCode(latitude, longitude, apiKey) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${apiKey}`,
    );
    const responseJson = response.json();
    const reverseGeocode = JSON.stringify(responseJson);
    return reverseGeocode;
  } catch (err) {
    console.log(err);
  }
}

async function getTopHeadlines(country) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=db8073f92c6945c8a5b65f974e324062`,
    );
  } catch (err) {
    console.log(err);
  }
}

export default {getReverseCode, getTopHeadlines};
