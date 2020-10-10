import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount, ReactWrapper } from "enzyme";
import thunk from "redux-thunk";
import { AnyAction, Store } from "redux";
import PokemonList from "./PokemonList";
import { BrowserRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Pokemon Info Component", () => {
  let store: Store<any, AnyAction>;
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const setup = (data: any) => {
    store = mockStore({
      ...data,
    });

    const rootComponent = mount(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonList />
        </BrowserRouter>
      </Provider>
    );
    component = rootComponent;
  };
  it("should render is loading", function () {
    setup({
      PokemonList: { loading: true, errorMessage: "", data: [] },
    });
    expect(component.text()).toEqual("is Loading");
  });
  it("should render is error message", function () {
    setup({
      PokemonList: {
        loading: false,
        errorMessage: "Test Error Message",
        data: [],
      },
    });
    expect(component.text()).toEqual("Test Error Message");
  });
  it("should render pokemon list", function () {
    setup({
      PokemonList: {
        loading: false,
        errorMessage: "",
        data: [{ name: "testPoke1" }, { name: "testPoke2" }],
      },
    });
    expect(component.text()).toEqual("Search testPoke1ViewtestPoke2ViewPreviousNext");
  });
});
