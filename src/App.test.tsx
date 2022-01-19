import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppProvider, PolarisTestProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/react-testing/matchers";
import React from "react";
import { Page } from "@shopify/polaris";

import App from "./App";

import { createMount } from "@shopify/react-testing";
import { shallow } from "enzyme";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import events from "events";
import { initialState } from "./components/PostsContainer/imagesSlice";

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  reducer: initialState,
  likedPosts: {
    data: [],
  },
};

jest.mock("react-redux", () => {
  return {
    useSelector: jest.fn(() => []),
    useDispatch: jest.fn(() => jest.fn()),
  };
});

export const mount = createMount<{}, {}>({
  render(element) {
    return (
      <Provider store={mockStore(storeStateMock)}>
        <PolarisTestProvider i18n={enTranslations}>
          {element}
        </PolarisTestProvider>
      </Provider>
    );
  },
});

test("renders page", () => {
  const wrapper = mount(<App />);
  // expect(wrapper).toContainReactComponent(Page);
});
