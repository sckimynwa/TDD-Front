import { render } from "@testing-library/react";
import React from "react";
import * as redux from "react-redux";
import { filledList } from "../fixtures/list";
import ListContainer from "./ListContainer";

describe("List Container Test", () => {
  jest.spyOn(redux, "useSelector").mockImplementation(() => filledList);

  it("renders list", () => {
    const { getByText } = render(<ListContainer />);
    expect(getByText("밥먹기"));
  });
});
