import React from "react";
import { ListModel } from "../Models/ListModel";

interface IProps {
  list: ListModel[];
}

const ListPresenter: React.FC<IProps> = ({ list }) => (
  <ul>
    {list?.length > 0 ? (
      list.map((item: ListModel) => <li key={item.id}>{item.content}</li>)
    ) : (
      <li>할일이 없습니다</li>
    )}
  </ul>
);

export default ListPresenter;
