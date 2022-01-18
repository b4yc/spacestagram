import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Image } from "./interfaces";

/**
 * This slice of state stores the date of liked posts in an array.
 * As per the APOD API, the date is unique and is used as a key
 */
export interface LikedPostsState {
  data: Image[];
}

const initialState: LikedPostsState = {
  data: JSON.parse(localStorage.getItem("likedPosts") || "[]") || [],
};

// const initializer = (initialValue = initialState) =>
//   JSON.parse(localStorage.getItem("likedPosts")) || initialValue;

export const authMiddleware =
  ({ getState }: any) =>
  (next: any) =>
  (action: any) => {
    const result = next(action);
    if (addLikedPost.match(action) || removeLikedPost.match(action)) {
      // Note: localStorage expects a string
      localStorage.setItem(
        "likedPosts",
        JSON.stringify([...getState().likedPosts.data])
      );
    }
    return result;
  };

export const likedPostsSlice = createSlice({
  name: "likedPosts",
  initialState,
  reducers: {
    // add a single image to array of liked posts
    addLikedPost: (state, action: PayloadAction<Image>) => {
      state.data = addPostToLikedPosts(state, action.payload);
    },
    // remove a single image from array of liked posts
    removeLikedPost: (state, action: PayloadAction<Image>) => {
      state.data = removePostFromLikedPosts(state, action.payload);
    },
  },
});

export const { addLikedPost, removeLikedPost } = likedPostsSlice.actions;

// selector of array of liked posts
export const selectLikedPosts = (state: RootState) => state.likedPosts.data;

/**
 * Helper function to add image to state if image has not already been liked
 * @param state the state of the likedPostsSlice
 * @param date the date of the image to be added
 * @returns the new state of likedPostsSlice
 */
function addPostToLikedPosts(
  state: LikedPostsState,
  imageToAdd: Image
): Image[] {
  return state.data.some((image) => image.url === imageToAdd.url)
    ? [...state.data]
    : [...state.data, imageToAdd];
}

/**
 * Helper function to remove image from state if image has been liked
 * @param state the state of the likedPostsSlice
 * @param date the date of the image to be added
 * @returns the new state of likedPostsSlice
 */
function removePostFromLikedPosts(
  state: LikedPostsState,
  imageToRemove: Image
): Image[] {
  return state.data.filter((image) => image.url !== imageToRemove.url);
}

// store.subscribe(() => {
//   localStorage.setItem(
//     "likedPosts",
//     JSON.stringify(store.getState().likedPosts)
//   );
// });

export default likedPostsSlice.reducer;
