
export interface PaginationRequest {
    pageSize: number,
    offset: number
}

export interface PokemonListAction {
    type: string,
    payload: any
}

export interface PokemonPageAction {
    type: string,
    payload: any,
    pokemonName: string,
}