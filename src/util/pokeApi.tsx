import axios from 'axios';
import {PaginationRequest} from "../models/actionModels";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";


export const getPaginatedList = (params: PaginationRequest) => {
    return axios.get(`${BASE_URL}?limit=${params.pageSize}&offset=${params.offset}`);
};

export const getPokemonInfo = (pokemon: string) => {
    return axios.get(`${BASE_URL}/${pokemon}`);
};