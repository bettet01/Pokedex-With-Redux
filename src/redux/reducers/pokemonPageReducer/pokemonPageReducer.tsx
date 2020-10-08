import { PokemonPageState } from "../../../models/genericModels";
import { PokemonPageAction } from "../../../models/actionModels";

const defaultState: PokemonPageState = {
  data: {},
  errorMessage: "",
  loading: false,
};

const PokemonPageReducer = (
  state = defaultState,
  action: PokemonPageAction
) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case "POKEMON_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage:
          "We had trouble getting to the pokemon database. Please try again later.",
      };
    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMessage: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default PokemonPageReducer;
