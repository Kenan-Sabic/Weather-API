import axios from 'axios';

export async function getCoordinates(city: string): Promise<{ latitude: number; longitude: number }> {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`;
  const response = await axios.get(url);
  const { lat, lon } = response.data[0];
  return { latitude: lat, longitude: lon };
}
