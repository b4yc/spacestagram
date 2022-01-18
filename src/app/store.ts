import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import imagesReducer from "../components/PostsContainer/imagesSlice";
import likedPostsReducer from "../shared/likedPostsSlice";
import { authMiddleware } from "../shared/likedPostsSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    likedPosts: likedPostsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
