import React, { useCallback, useEffect, useState } from "react";
import {
  Layout,
  MediaCard,
  Card,
  Button,
  Heading,
  Collapsible,
  TextContainer,
} from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";
import { Image } from "../../shared/interfaces";
import { ChevronDownMinor, ChevronUpMinor } from "@shopify/polaris-icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Post.scss";
import likedPostsSlice, {
  addLikedPost,
  removeLikedPost,
  selectLikedPosts,
} from "../../shared/likedPostsSlice";

export default function Post({ title, description, date, url }: Image) {
  const dispatch = useAppDispatch();
  const likedPosts = useAppSelector(selectLikedPosts);
  const [open, setOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedPosts.indexOf(date) > -1 ? true : false);
  }, [likedPosts]);

  const handleDescriptionToggle = useCallback(
    () => setOpen((open) => !open),
    []
  );

  function handleLikeToggle() {
    isLiked ? dispatch(removeLikedPost(date)) : dispatch(addLikedPost(date));
  }

  return (
    <Card sectioned>
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={url}
      />
      <div className="card-heading">
        <Heading>{title}</Heading>
        <Button
          onClick={handleLikeToggle}
          pressed={isLiked}
          icon={HeartMajor}
          plain
        ></Button>
      </div>

      <Collapsible
        open={open}
        id="collapsible-description"
        transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        <TextContainer>
          <p>{description}</p>
        </TextContainer>
      </Collapsible>
      <Button
        onClick={handleDescriptionToggle}
        ariaExpanded={open}
        ariaControls="collapsible-description"
        icon={open ? ChevronUpMinor : ChevronDownMinor}
        plain
        fullWidth
      />
    </Card>
  );
}
