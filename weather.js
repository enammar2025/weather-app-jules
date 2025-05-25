import axios from 'axios';

export async function getWeather(city) {
  const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=${city}`);
  return response.data;
}
