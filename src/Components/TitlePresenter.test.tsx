import React from "react";
import { render } from "@testing-library/react";
import TitlePresenter from "./TitlePresenter";

describe("Title Component Test", () => {
  it("render title", () => {
    const { container } = render(<TitlePresenter />);

    expect(container).toHaveTextContent("Todo List");
  });
});
