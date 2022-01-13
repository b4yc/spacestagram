import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import imagesReducer from "../components/PostsContainer/imagesSlice";
import likedPostsReducer from "../shared/likedPostsSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    likedPosts: likedPostsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
