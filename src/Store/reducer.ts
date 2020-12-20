import { ListModel } from "../Models/ListModel";

interface Action {
  type: string;
  payload: any;
}

interface State {
  list: ListModel[];
}

const initialState: State = {
  list: [],
};

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  if (action.type === "SET_LIST") {
    const { list } = action.payload;
    return {
      ...state,
      list,
    };
  } else if (action.type === "DELETE_LIST") {
    const { list } = state;
    const { id } = action.payload;
    return {
      ...state,
      list: list.filter((item: ListModel) => item.id !== id),
    };
  } else {
    return state;
  }
}
