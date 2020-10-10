import PokemonListReducer from "../pokemonListReducer/pokemonListReducer";

describe("Pokemon List Reducer", () => {
  it("should set loading to true", function () {
    const result = PokemonListReducer(undefined, {
      type: "POKEMON_LIST_LOADING",
      payload: {},
    });
    expect(result).toEqual({
      loading: true,
      errorMessage: "",
      count: 0,
      data: [],
    });
  });
  it("should set errorMessage ", function () {
    const result = PokemonListReducer(undefined, {
      type: "POKEMON_LIST_FAIL",
      payload: {},
    });
    expect(result).toEqual({
      loading: false,
      errorMessage:
        "We had trouble getting to the pokemon database. Please try again later.",
      count: 0,
      data: [],
    });
  });
  it("should set data ", function () {
    const result = PokemonListReducer(undefined, {
      type: "POKEMON_LIST_SUCCESS",
      payload: { results: ["test"], count: 53 },
    });
    expect(result).toEqual({
      loading: false,
      errorMessage: "",
      count: 53,
      data: ["test"],
    });
  });
  it("should do nothing ", function () {
    const result = PokemonListReducer(undefined, {
      type: "FAILED",
      payload: { results: ["test"], count: 53 },
    });
    expect(result).toEqual({
      loading: false,
      errorMessage: "",
      count: 0,
      data: [],
    });
  });
});
