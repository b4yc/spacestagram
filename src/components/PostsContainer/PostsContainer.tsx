import React, { useEffect } from "react";
import { EmptyState, Pagination } from "@shopify/polaris";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Post from "../Post/Post";
import {
  fetchImagesAsync,
  selectPages,
  selectActivePage,
  addPageData,
  setActivePage,
  selectStatus,
} from "./imagesSlice";
import { selectLikedPosts } from "../../shared/likedPostsSlice";
import emptyImage from "../../assets/empty.png";
import failedImage from "../../assets/failed.png";

type PostsContainerProps = {
  selectedTabId: string;
};

export default function PostsContainer({ selectedTabId }: PostsContainerProps) {
  const dispatch = useAppDispatch();
  const pagesData = useAppSelector(selectPages);
  const activePage = useAppSelector(selectActivePage);
  const activeExplorePage = useAppSelector(selectActivePage);
  const likedPosts = useAppSelector(selectLikedPosts);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (
      !pagesData.some((page) => page.number === activePage) &&
      status !== "failed"
    ) {
      dispatch(fetchImagesAsync(activePage))
        .unwrap()
        .then((res) => {
          dispatch(
            addPageData({
              number: activePage,
              images: res.data.map((image: any) => {
                return {
                  title: image.title,
                  date: image.date,
                  description: image.explanation,
                  url:
                    image.media_type === "video"
                      ? image.thumbnail_url
                      : image.url,
                };
              }),
            })
          );
        })
        .catch((res) => {
          console.log("Error occurred", res);
        });
    }
  });

  return (
    <>
      {selectedTabId === "explore" ? (
        status === "failed" ? (
          <div data-testid="error-state-page">
            <EmptyState
              heading="Something got lost in space..."
              image={failedImage}
            >
              <p>Please try again later.</p>
            </EmptyState>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
              }}
              data-testid="apod-images"
            >
              {pagesData
                .find((page) => page.number === activePage)
                ?.images?.map((image) => (
                  <Post image={image} key={image.url} />
                ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <Pagination
                hasPrevious={activeExplorePage > 0}
                onPrevious={() => {
                  dispatch(setActivePage(activeExplorePage - 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                hasNext
                onNext={() => {
                  dispatch(setActivePage(activeExplorePage + 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </>
        )
      ) : likedPosts.length === 0 ? (
        <div data-testid="empty-state-page">
          <EmptyState heading="There's nothing to see here" image={emptyImage}>
            <p>
              Head over to the <em>Explore Recent</em> tab to start your
              collection!
            </p>
          </EmptyState>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
          data-testid="liked-images"
        >
          {likedPosts.map((image) => (
            <Post image={image} key={image.url} />
          ))}
        </div>
      )}
    </>
  );
}
