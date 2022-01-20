import React, { useCallback, useState } from "react";

import { Frame, Page, Tabs } from "@shopify/polaris";

import "./App.css";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import Skeleton from "./components/Skeleton/Skeleton";
import { useAppSelector } from "./app/hooks";
import { selectStatus } from "./components/PostsContainer/imagesSlice";
import logo from "./assets/logo.svg";

export const tabs = [
  {
    id: "explore",
    content: "Explore Recent",
    accessibilityLabel: "Explore Recent Page",
    panelID: "explore-page-content",
  },
  {
    id: "liked",
    content: "Your Favourites",
    accessibilityLabel: "Your Favourites Page",
    panelID: "liked-page-content",
  },
];

function App() {
  const status = useAppSelector(selectStatus);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    []
  );

  return status === "loading" ? (
    <Skeleton />
  ) : (
    <Page title="" narrowWidth>
      <img
        src={logo}
        alt="spacestagram logo"
        style={{
          width: "200px",
          padding: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.reload();
        }}
        data-testid="logo"
      ></img>
      <hr />
      <Frame>
        <Tabs
          tabs={tabs}
          selected={selectedTab}
          onSelect={handleTabChange}
          fitted
        ></Tabs>
        <PostsContainer selectedTabId={tabs[selectedTab].id} />
      </Frame>
    </Page>
  );
}

export default App;
