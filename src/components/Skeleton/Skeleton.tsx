import React from "react";
import {
  Card,
  SkeletonBodyText,
  SkeletonDisplayText,
  TextContainer,
  SkeletonPage,
  SkeletonThumbnail,
  Tabs,
} from "@shopify/polaris";
import { NUM_OF_IMAGES_PER_PAGE } from "../PostsContainer/imagesApi";
import { tabs } from "../../App";

export default function Skeleton() {
  return (
    <SkeletonPage title="" narrowWidth>
      <hr />
      <Tabs tabs={tabs} selected={0} fitted></Tabs>
      {Array(NUM_OF_IMAGES_PER_PAGE)
        .fill(0)
        .map((_, index) => {
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
