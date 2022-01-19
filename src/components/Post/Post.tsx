import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Button,
  Heading,
  Collapsible,
  TextContainer,
  Toast,
  ButtonGroup,
} from "@shopify/polaris";
import { Image } from "../../shared/interfaces";
import {
  ChevronDownMinor,
  ChevronUpMinor,
  ShareMinor,
  HeartMajor,
} from "@shopify/polaris-icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addLikedPost,
  removeLikedPost,
  selectLikedPosts,
} from "../../shared/likedPostsSlice";

export default function Post({ image }: { image: Image }) {
  const dispatch = useAppDispatch();
  const likedPosts = useAppSelector(selectLikedPosts);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [toastActive, setToastActive] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(image.date);
    setFormattedDate(date.toDateString().split(" ").slice(1).join(" "));
  }, [image.date]);

  useEffect(() => {
    setIsLiked(
      likedPosts.some((likedPost) => likedPost.url === image.url) ? true : false
    );
  }, [likedPosts]);

  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    []
  );

  const handleDescriptionToggle = useCallback(
    () => setDescriptionOpen((open) => !open),
    []
  );

  function handleLikeToggle() {
    if (isLiked) {
      setToastMessage("Removed from Favourites");
      dispatch(removeLikedPost(image));
    } else {
      setToastMessage("Added to Favourites");
      dispatch(addLikedPost(image));
    }
    setToastActive(true);
  }

  return (
    <>
      <Card sectioned>
        <img
          alt={"APOD image of " + image.date}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={image.url}
        />
        <div
          style={{
            padding: "1rem 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Heading>{image.title}</Heading>
            <p>{formattedDate}</p>
          </div>
          <ButtonGroup segmented>
            <Button
              onClick={() => {
                setToastMessage("URL Copied to Clipboard");
                setToastActive(true);
                navigator.clipboard.writeText(image.url);
              }}
              accessibilityLabel="Copy url to clipboard"
              icon={ShareMinor}
            ></Button>
            <Button
              onClick={handleLikeToggle}
              accessibilityLabel={isLiked ? "Unlike post" : "Like post"}
              pressed={isLiked}
              icon={HeartMajor}
            ></Button>
          </ButtonGroup>
        </div>

        <Collapsible
          open={descriptionOpen}
          id="collapsible-description"
          transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
          expandOnPrint
        >
          <TextContainer>
            <p>{image.description}</p>
          </TextContainer>
        </Collapsible>
        <Button
          onClick={handleDescriptionToggle}
          accessibilityLabel={
            descriptionOpen ? "Collapse description" : "Expand description"
          }
          ariaExpanded={descriptionOpen}
          ariaControls="collapsible-description"
          icon={descriptionOpen ? ChevronUpMinor : ChevronDownMinor}
          plain
          fullWidth
        />
      </Card>

      {toastActive ? (
        <Toast content={toastMessage} onDismiss={toggleToastActive} />
      ) : null}
    </>
  );
}
