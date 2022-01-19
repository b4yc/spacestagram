import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
afterEach(cleanup);
import "@testing-library/jest-dom";
import Post from "./Post";

test("<Post/> renders", () => {
  const image = {
    date: "date",
    url: "url",
    title: "title",
    description: "description",
  };
  const postComponent = render(
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Post image={image} />
      </AppProvider>
    </Provider>
  );
  expect(postComponent).toBeDefined();
});
