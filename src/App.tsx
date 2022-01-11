import React, { useEffect, useState } from "react";
import axios from "axios";
import { Page } from "@shopify/polaris";
import logo from "./logo.svg";
import "./App.css";
import PostsContainer from "./components/PostsContainer/PostsContainer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=2017-07-08`
    //   )
    //   .then((res) => {
    //     console.log("calling API");
    //     setImage({
    //       title: res.data.title,
    //       date: res.data.date,
    //       description: res.data.explanation,
    //       url: res.data.url,
    //     });
    //   })
    //   .then(() => {
    //     setLoading(false);
    //   });
  });
  return !loading ? (
    <Page title="Spacestagram">
      <PostsContainer />
    </Page>
  ) : (
    <div>loading</div>
  );
}

export default App;
