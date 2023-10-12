// pages/api/weather.js

import getUserLocation from "../../utils/geolocation";
import getWeatherInfo from "../../utils/weather";

export default async (req, res) => {
  try {
    const locationData = await getUserLocation();
    if (!locationData) {
      res.status(500).json({ error: "Failed to retrieve user location." });
      return;
    }

    const { latitude, longitude } = locationData;
    const weatherData = await getWeatherInfo(latitude, longitude);
    if (!weatherData) {
      res.status(500).json({ error: "Failed to retrieve weather data." });
      return;
    }

    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};
