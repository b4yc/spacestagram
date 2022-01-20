import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppProvider } from "@shopify/polaris";
import App from "./App";
import { render } from "@testing-library/react";
import enTranslations from "@shopify/polaris/locales/en.json";

test("renders Explore Recent tab", () => {
  const appComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </Provider>
  );
  expect(appComponent.getAllByText("Explore Recent")).toBeTruthy();
});

test("renders Your Favourites tab", () => {
  const appComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </Provider>
  );
  expect(appComponent.getAllByText("Your Favourites")).toBeTruthy();
});
