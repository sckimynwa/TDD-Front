import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { filledList } from "../fixtures/list";
import { getList, setList } from "./actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../Services/mockApi");

describe("Store Action Test", () => {
  it("getList action test", async () => {
    const store = mockStore({});
    await store.dispatch(getList() as any);
    const actions = store.getActions();

    expect(actions[0]).toEqual(setList(filledList));
  });
});
