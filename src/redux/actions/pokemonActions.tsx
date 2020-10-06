import {getPaginatedList, getPokemonInfo} from "../../util/pokeApi";
import {PaginationRequest} from "../../models/actionModels";

export const getPokemonList = (page: number) => async (dispatch: any) => {
    try {
        const pageSize = 15;
        dispatch({
            type: "POKEMON_LIST_LOADING"
        })
        const requestParams: PaginationRequest = {
            pageSize,
            offset: (page * pageSize) - pageSize,
        };
        const res = await getPaginatedList(requestParams)

        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data,
        })
    } catch(e) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        })
    }
};

export const getPokemon = (pokemon: string) => async (dispatch: any) => {
    try{
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING"
        });

        const res = await getPokemonInfo(pokemon);

        dispatch({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload: res.data,
            pokemonName: pokemon,
        })

    } catch (e) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL"
        })
    }
}