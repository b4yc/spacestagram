import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
afterEach(cleanup);
import "@testing-library/jest-dom";
import PostsContainer from "./PostsContainer";

test("<PostsContainer/> renders explore page", () => {
  const image = {
    date: "date",
    url: "url",
    title: "title",
    description: "description",
  };
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <PostsContainer selectedTabId="explore" />
      </AppProvider>
    </Provider>
  );
  expect(postComponent).toBeTruthy();
});
