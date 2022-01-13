import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Layout } from "@shopify/polaris";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Post from "../Post/Post";
import { Image } from "../../shared/interfaces";
import { fetchImagesAsync, setImagesData, selectImages } from "./imagesSlice";
import "./PostsContainer.scss";
import { useSelector } from "react-redux";

export default function PostsContainer() {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);

  useEffect(() => {
    dispatch(fetchImagesAsync());
  }, []);
  return (
    <div className="posts">
      <Layout>
        <Layout.Section>
          {images.map((image) => (
            <Post {...image} key={image.date} />
          ))}
        </Layout.Section>
      </Layout>
    </div>
  );
}
