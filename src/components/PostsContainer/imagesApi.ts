import axios from "axios";

export const NUM_OF_IMAGES_PER_PAGE = 15;

/**
 *
 * @param page
 * @param today
 */
function convertPageToStartDate(page: number): string {
  let startDate = new Date();
  startDate.setDate(
    startDate.getDate() -
      page * NUM_OF_IMAGES_PER_PAGE -
      NUM_OF_IMAGES_PER_PAGE +
      1
  );
  return startDate.toISOString().split("T")[0];
}

function convertPageToEndDate(page: number): string {
  let endDate = new Date();

  endDate.setDate(endDate.getDate() - page * NUM_OF_IMAGES_PER_PAGE);
  return endDate.toISOString().split("T")[0];
}

/**
 * Each call will retrieve 10 days of images
 * @param page the page number the user wants to retrieve. Note that page number starts at 0
 * @returns the nasa api call result. The result requires further processing for error checking.
 */
export function fetchImages(page: number = 0) {
  return axios.get(`https://api.nasa.gov/planetary/apod`, {
    params: {
      api_key: process.env.REACT_APP_NASA_API_KEY,
      thumbs: true,
      start_date: convertPageToStartDate(page),
      end_date: convertPageToEndDate(page),
    },
  });
}
