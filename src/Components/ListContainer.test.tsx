import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { filledList } from "../fixtures/list";
import ListContainer from "./ListContainer";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("List Container Test", () => {
  it("renders list", () => {
    const store = mockStore({ list: filledList });
    const { getByText } = render(
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );
    expect(getByText("밥먹기"));
  });
});
