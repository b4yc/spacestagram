import React, { useEffect } from "react";
import { Button, Stack } from "@shopify/polaris";

import { useAppDispatch } from "../../app/hooks";
import Post from "../Post/Post";
import { fetchImagesAsync } from "./imagesSlice";

import "./PostsContainer.scss";

export default function PostsContainer() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchImagesAsync);
  }, []);
  return (
    <Stack vertical spacing="extraLoose">
      <Post />
      <Post />
      <Post />
    </Stack>
    // <div className="container">
    //   <div className="posts">
    //     <Post />
    //     <Post />
    //     <Post />
    //   </div>
    // </div>
  );
}
