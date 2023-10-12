import axios from "axios";

const GEOLOCATION_API_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

async function getUserLocation() {
  try {
    const response = await axios.get(GEOLOCATION_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching user location:", error);
    return null;
  }
}

export default getUserLocation;
