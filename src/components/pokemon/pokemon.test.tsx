import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Pokemon from "./Pokemon";
import { mount, ReactWrapper } from "enzyme";
import thunk from "redux-thunk";
import { AnyAction, Store } from "redux";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Pokemon Info Component", () => {
  let store: Store<any, AnyAction>;
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const setup = (data: any) => {
    store = mockStore({
      ...data,
    });
    const mockProps = {
      params: {
        pokemon: "Ethan",
      },
    };

    const rootComponent = mount(
      <Provider store={store}>
        <Pokemon match={mockProps} />
      </Provider>
    );
    component = rootComponent.childAt(0);
  };

  it("should display loading", function () {
    setup({
      PokemonPage: {
        loading: true,
        data: {},
        errorMessage: "",
      },
    });
    expect(component.find('[data-test-id="loading"]').text()).toEqual(
      "Loading..."
    );
  });
  it("should display the error message", function () {
    setup({
      PokemonPage: {
        loading: false,
        data: {},
        errorMessage: "error from redux",
      },
    });
    expect(component.find('[data-test-id="errorMessage"]').text()).toEqual(
      "error from redux"
    );
  });
  it("should display the pokemon data", function () {
    setup({
      PokemonPage: {
        loading: true,
        data: {
          Ethan: {
            sprites: {
              front_default: "test1",
              back_default: "test2",
              front_shiny: "test3",
              back_shiny: "test4",
            },
            stats: [
              {
                base_stat: 42,
                stat: {
                  name: "health",
                },
              },
            ],
            abilities: [
              {
                ability: {
                  name: "throw",
                },
              },
            ],
          },
        },
      },
      errorMessage: "",
    });
    expect(component.find('[data-test-id="img1"]')).toBeDefined();
    expect(component.find('[data-test-id="stats"]').text()).toEqual(
      "health: 42"
    );
  });
});
