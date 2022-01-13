import axios from "axios";

export function fetchImages() {
  return axios.get(`https://api.nasa.gov/planetary/apod`, {
    params: {
      api_key: process.env.REACT_APP_NASA_API_KEY,
      thumbs: true,
      start_date: "2022-01-01",
      // end_date: 2022-01
    },
  });
}
