import {NEWS_API, GOOGLE_API_KEY} from 'react-native-dotenv';
import {} from 'react-native';

export async function getReverseCode(latitude, longitude, apiKey) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${apiKey}`,
    );

    const {results} = await response.json();
    const country = results[0].address_components.filter((component) =>
      component.types.includes('country'),
    );

    return country[0].short_name;
  } catch (err) {
    console.log(err);
  }
}

export async function getEverything() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API}`,
    );
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.log(error);
  }
}

export async function getTopHeadlines(country) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API}`,
    );
    const articles = await response.json();
    return articles;
  } catch (err) {
    console.log(err);
  }
}
