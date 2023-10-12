import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/styles.module.scss";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's location using BigDataCloud Geolocation API
        const geoResponse = await axios.get(
          "https://api.bigdatacloud.net/data/reverse-geocode-client"
        );
        const { latitude, longitude } = geoResponse.data;

        // Fetch weather data from WeatherAPI.com using the obtained coordinates
        const weatherResponse = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=c6dd9814c8e94a8cb1a30915231110&q=${latitude},${longitude}`
        );

        setWeather(weatherResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles["weather-info-container"]}>
      {weather ? (
        <div className={styles["weather-info"]}>
          <h2>Weather Information</h2>
          <p>
            Location: {weather.location.name}, {weather.location.country}
          </p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      ) : (
        <p className={styles["loading-text"]}>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
