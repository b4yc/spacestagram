import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchImages() {
  return axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=2017-07-08`
    )
    .then((res) => {
      return res.data;
    });
}
