export async function getWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=${city}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
