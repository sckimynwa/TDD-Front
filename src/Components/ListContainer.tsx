import React from "react";
import { useSelector } from "react-redux";
import ListPresenter from "./ListPresenter";

const ListContainer = () => {
  const list = useSelector((state: any) => state.list);
  return <ListPresenter list={list} />;
};

export default ListContainer;
