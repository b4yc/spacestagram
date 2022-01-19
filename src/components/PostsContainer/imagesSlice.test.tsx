import { AnyAction } from "redux";
import reducer, {
  addPageData,
  setActivePage,
  initialState,
  ImagesState,
} from "./imagesSlice";

// reducers
test("should return the initial state", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
});

test("should handle a page being added to empty list", () => {
  const pageDataToAdd = { number: 0, images: [] };
  const expectedImagesState = {
    data: { activePage: 0, pagesData: [pageDataToAdd] },
    status: "idle",
  };
  expect(
    reducer(initialState as ImagesState, addPageData(pageDataToAdd))
  ).toEqual(expectedImagesState);
});

test("should handle a updating a new active page", () => {
  const expectedImagesState = {
    data: { activePage: 1, pagesData: [] },
    status: "idle",
  };
  expect(reducer(initialState as ImagesState, setActivePage(1))).toEqual(
    expectedImagesState
  );
});
