import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

/**
 * This slice of state stores the date of liked posts in an array.
 * As per the APOD API, the date is unique and is used as a key
 */
export interface LikedPostsState {
  data: string[];
}

const initialState: LikedPostsState = {
  data: [],
};

export const likedPostsSlice = createSlice({
  name: "likedPosts",
  initialState,
  reducers: {
    // add a single image to array of liked posts
    addLikedPost: (state, action: PayloadAction<string>) => {
      state.data = addPostToLikedPosts(state, action.payload);
    },
    // remove a single image from array of liked posts
    removeLikedPost: (state, action: PayloadAction<string>) => {
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
function addPostToLikedPosts(state: LikedPostsState, date: string) {
  return state.data.indexOf(date) > -1
    ? [...state.data]
    : [...state.data, date];
}

/**
 * Helper function to remove image from state if image has been liked
 * @param state the state of the likedPostsSlice
 * @param date the date of the image to be added
 * @returns the new state of likedPostsSlice
 */
function removePostFromLikedPosts(state: LikedPostsState, date: string) {
  const indexOfImage = state.data.indexOf(date);
  console.log(indexOfImage);
  return indexOfImage > -1
    ? state.data.filter((imageDate) => imageDate !== date)
    : [...state.data];
}

export default likedPostsSlice.reducer;
