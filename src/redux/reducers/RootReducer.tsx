import { combineReducers } from "redux";
import PokemonListReducer from "./pokemonListReducer";
import PokemonPageReducer from "./pokemonPageReducer";
export const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  PokemonPage: PokemonPageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
