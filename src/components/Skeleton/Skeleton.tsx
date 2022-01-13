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

export default function Skeleton() {
  return (
    <SkeletonPage title="Spacestagram">
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
          </Card>
          <Card subdued>
            <Card.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={2} />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}
