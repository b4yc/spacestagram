import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Page, Pagination, Tabs } from "@shopify/polaris";
import logo from "./logo.svg";
import "./App.css";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import Skeleton from "./components/Skeleton/Skeleton";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  selectActivePage,
  selectStatus,
  setActivePage,
} from "./components/PostsContainer/imagesSlice";

const tabs = [
  {
    id: "explore",
    content: "Explore",
    accessibilityLabel: "Explore Page",
    panelID: "explore-page-content",
  },
  {
    id: "liked",
    content: "Your Favourites",
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
  ) : status === "failed" ? (
    <div>failed</div>
  ) : (
    <Page title="Spacestagram" divider narrowWidth>
      <Tabs
        tabs={tabs}
        selected={selectedTab}
        onSelect={handleTabChange}
      ></Tabs>
      <PostsContainer selectedTabId={tabs[selectedTab].id} />
    </Page>
  );
}

export default App;
