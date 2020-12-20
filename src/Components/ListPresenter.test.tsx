import React from "react";
import { render } from "@testing-library/react";
import ListPresenter from "./ListPresenter";
import { ListModel } from "../Models/ListModel";

describe("List Presenter Component Test", () => {
  it("render list with content", () => {
    const list: ListModel[] = [
      {
        id: 1,
        content: "밥먹기",
      },
      {
        id: 2,
        content: "책읽기",
      },
    ];

    const { container } = render(<ListPresenter list={list} />);

    expect(container).toHaveTextContent("밥먹기");
    expect(container).toHaveTextContent("책읽기");
  });

  it("render list without content", () => {
    const list: ListModel[] = [];

    const { container } = render(<ListPresenter list={list} />);

    expect(container).toHaveTextContent("할일이 없습니다");
  });
});
