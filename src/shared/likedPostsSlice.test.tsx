import { AnyAction } from "redux";
import reducer, {
  addLikedPost,
  removeLikedPost,
  LikedPostsState,
} from "./likedPostsSlice";

// reducers
const mockImageData = {
  title: "title",
  date: "date",
  description: "description",
  url: "url",
};

const mockEmptyLikedPostState = {
  data: [],
};
const mockPopulatedLikedPostState = {
  data: [mockImageData],
};

test("should return the initial state", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(mockEmptyLikedPostState);
});

test("should handle a post being added to empty list", () => {
  expect(
    reducer(
      mockEmptyLikedPostState as LikedPostsState,
      addLikedPost(mockImageData)
    )
  ).toEqual(mockPopulatedLikedPostState);
});

test("should handle removing a post from list", () => {
  expect(
    reducer(
      mockPopulatedLikedPostState as LikedPostsState,
      removeLikedPost(mockImageData)
    )
  ).toEqual(mockEmptyLikedPostState);
});
