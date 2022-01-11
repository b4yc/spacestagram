import React from "react";
import { Layout, MediaCard, Card, Button, Heading } from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";

export default function Post() {
  return (
    <Layout>
      <Layout.AnnotatedSection
        id="storeDetails"
        title="Store details"
        description="Shopify and your customers will use this information to contact you."
      >
        <Card>
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=2EYIAQOZDLdoTYuqe2aEmBb6OVZ5Pp2IZKvdbPeS"
          ></img>
          <Card.Section>
            <Button
              icon={HeartMajor}
              accessibilityLabel="like"
              fullWidth
              plain
            />
          </Card.Section>
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
  );
}
