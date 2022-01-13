import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Image } from "../../shared/interfaces";
import { fetchImages } from "./imagesApi";

export interface ImagesState {
  data: Array<Image>;
  status: "idle" | "loading" | "failed";
}

const initialState: ImagesState = {
  data: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchImagesAsync = createAsyncThunk(
  "images/fetchImages",
  async (_, { dispatch }) => {
    const response = await fetchImages()
      .then((res) => {
        if (res.statusText === "OK") {
          dispatch(
            setImagesData(
              res.data.map((image: any) => {
                return {
                  title: image.title,
                  date: image.date,
                  description: image.explanation,
                  url: image.url,
                };
              })
            )
          );
        } else {
          console.log("error: ", res.statusText);
        }
      })
      .catch((err) => {
        console.log("error: ", err.message);
      });
    return response;
  }
);

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImagesData: (state, action: PayloadAction<Image[]>) => {
      state.data = action.payload;
    },
    addImages: (state, action: PayloadAction<Image[]>) => {
      state.data = [...state.data, ...action.payload];
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.value += action.payload;
  //     });
  // },
});

export const { setImagesData, addImages } = imagesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectImages = (state: RootState) => state.images.data;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default imagesSlice.reducer;
