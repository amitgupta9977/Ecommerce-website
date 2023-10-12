import axios from "axios";

const WEATHER_API_KEY = "c6dd9814c8e94a8cb1a30915231110";
const WEATHER_API_URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;

async function getWeatherInfo(latitude, longitude) {
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}&q=${latitude},${longitude}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

export default getWeatherInfo;
