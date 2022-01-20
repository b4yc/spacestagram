import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
afterEach(cleanup);
import "@testing-library/jest-dom";
import Post from "./Post";

const image = {
  date: "2022-01-15",
  url: "url",
  title: "title",
  description: "description",
};

test("<Post/> renders", () => {
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Post image={image} />
      </AppProvider>
    </Provider>
  );
  expect(postComponent).toBeDefined();
});

test("renders post title", () => {
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Post image={image} />
      </AppProvider>
    </Provider>
  );
  expect(postComponent.getByText("title")).toBeInTheDocument();
});

test("renders post image", () => {
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Post image={image} />
      </AppProvider>
    </Provider>
  );
  const imageInDoc = postComponent.getByAltText("APOD image of " + image.date);
  expect(imageInDoc).toHaveAttribute("src", image.url);
});

test("renders share button", () => {
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Post image={image} />
      </AppProvider>
    </Provider>
  );
  expect(
    postComponent.getByLabelText("Copy url to clipboard")
  ).toBeInTheDocument();
});

test("renders like button", () => {
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Post image={image} />
      </AppProvider>
    </Provider>
  );
  expect(postComponent.getByLabelText("Like post")).toBeInTheDocument();
});
