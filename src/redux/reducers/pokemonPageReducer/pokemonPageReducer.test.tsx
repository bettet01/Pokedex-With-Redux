import PokemonPageReducer from "./pokemonPageReducer";


describe('Pokemon Page Reducer', () => {
  it('should do nothing', function () {
    const result = PokemonPageReducer(undefined, { type: "TEST", payload: {}, pokemonName: "Test"})
    expect(result).toEqual({
      loading: false,
      data: {},
      errorMessage: ""
    })
  });
  it('should set loading', function () {
    const result = PokemonPageReducer(undefined, { type: "POKEMON_MULTIPLE_LOADING", payload: {}, pokemonName: "Test"})
    expect(result).toEqual({
      loading: true,
      data: {},
      errorMessage: ""
    })
  });
  it('should set errorMessage', function () {
    const result = PokemonPageReducer(undefined, { type: "POKEMON_MULTIPLE_FAIL", payload: {}, pokemonName: "Test"})
    expect(result).toEqual({
      loading: false,
      data: {},
      errorMessage: "We had trouble getting to the pokemon database. Please try again later."
    })
  });
  it('should set data', function () {
    const result = PokemonPageReducer(undefined, { type: "POKEMON_MULTIPLE_SUCCESS", payload: { words: "Some amount of data" }, pokemonName: "Test"})
    expect(result).toEqual({
      loading: false,
      data: {
        "Test": {
          words: "Some amount of data"
        }
      },
      errorMessage: ""
    })
  });
})