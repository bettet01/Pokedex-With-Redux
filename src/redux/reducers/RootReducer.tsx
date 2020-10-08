import { combineReducers } from "redux";
import PokemonListReducer from "./pokemonListReducer/pokemonListReducer";
import PokemonPageReducer from "./pokemonPageReducer/pokemonPageReducer";
export const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  PokemonPage: PokemonPageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
