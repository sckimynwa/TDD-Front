import { Dispatch } from "redux";
import { ListModel } from "../Models/ListModel";
import { fetchList } from "../Services/api";

export type ActionType = "SET_LIST" | "DELETE_LIST";

// Action
export const setList = (list: ListModel[]) => {
  return {
    type: "SET_LIST",
    payload: {
      list,
    },
  };
};

export const deleteList = (id: number) => {
  return {
    type: "DELETE_LIST",
    payload: {
      id,
    },
  };
};

// Thunk Action
export const getList = () => {
  return async (dispatch: Dispatch) => {
    const list: ListModel[] = (await fetchList()) as ListModel[];
    dispatch(setList(list));
  };
};
