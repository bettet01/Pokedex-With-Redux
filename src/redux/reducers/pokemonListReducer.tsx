import { PokemonListState } from "../../models/genericModels";
import {PokemonListAction} from "../../models/actionModels";

const defaultState: PokemonListState  = {
    loading: false,
    data: [],
    errorMessage: "",
    count: 0,
}

const PokemonListReducer = (state = defaultState, action: PokemonListAction) => {
    switch (action.type){
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMessage: "",
            }
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMessage: "We had trouble getting to the pokemon database. Please try again later."
            }
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMessage: "",
                data: action.payload.results,
                count: action.payload.count
            }
        default:
            return state
    }
}

export default PokemonListReducer;