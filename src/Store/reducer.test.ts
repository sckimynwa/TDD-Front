import reducer from "./reducer";
import { setList, deleteList } from "./actions";
import { filledList } from "../fixtures/list";
import { ListModel } from "../Models/ListModel";

describe("reducer test", () => {
  it("set list", () => {
    const initialState = {
      list: [],
    };
    const state = reducer(initialState, setList(filledList as ListModel[]));
    expect(state.list).not.toHaveLength(0);
  });

  it("delete list success", () => {
    const initialState = {
      list: filledList,
    };
    const state = reducer(initialState, deleteList(1));
    expect(state.list).toHaveLength(1);
  });

  it("delete list failed", () => {
    const initialState = {
      list: filledList,
    };
    const state = reducer(initialState, deleteList(3));
    expect(state.list).toHaveLength(2);
  });
});
