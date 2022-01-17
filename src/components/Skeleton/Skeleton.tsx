import {
  Layout,
  Card,
  Button,
  SkeletonBodyText,
  SkeletonDisplayText,
  TextContainer,
  SkeletonPage,
  SkeletonThumbnail,
} from "@shopify/polaris";
import React from "react";
import { NUM_OF_IMAGES_PER_PAGE } from "../PostsContainer/imagesApi";

export default function Skeleton() {
  return (
    <SkeletonPage title="Spacestagram" narrowWidth>
      {Array(NUM_OF_IMAGES_PER_PAGE)
        .fill(0)
        .map((index) => {
          return (
            <Card key={index}>
              <Card.Section>
                <SkeletonThumbnail size="large" />
                <TextContainer>
                  <br />
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={2} />
                </TextContainer>
              </Card.Section>
            </Card>
          );
        })}
    </SkeletonPage>
  );
}
