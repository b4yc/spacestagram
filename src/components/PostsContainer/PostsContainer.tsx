import React, { useEffect, useState } from "react";
import { Layout, Pagination } from "@shopify/polaris";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Post from "../Post/Post";
import {
  fetchImagesAsync,
  selectPages,
  selectActivePage,
  addPageData,
  setActivePage,
} from "./imagesSlice";
import "./PostsContainer.scss";
import { selectLikedPosts } from "../../shared/likedPostsSlice";

type PostsContainerProps = {
  selectedTabId: string;
};

export default function PostsContainer({ selectedTabId }: PostsContainerProps) {
  const dispatch = useAppDispatch();
  const pagesData = useAppSelector(selectPages);
  const activePage = useAppSelector(selectActivePage);
  const activeExplorePage = useAppSelector(selectActivePage);
  const likedPosts = useAppSelector(selectLikedPosts);

  useEffect(() => {
    if (pagesData.some((page) => page.number === activePage)) {
      console.log("exists already");
      return;
    } else {
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
        });
    }
  }, [activePage]);

  return (
    <>
      {selectedTabId === "explore"
        ? pagesData[activePage]?.images?.map((image) => (
            <Post image={image} key={image.date} />
          ))
        : likedPosts.map((image) => <Post image={image} key={image.date} />)}
      {selectedTabId === "explore" && (
        <Pagination
          hasPrevious={activeExplorePage > 0}
          onPrevious={() => {
            dispatch(setActivePage(activeExplorePage - 1));
          }}
          hasNext
          onNext={() => {
            dispatch(setActivePage(activeExplorePage + 1));
          }}
        />
      )}
    </>
  );
}
