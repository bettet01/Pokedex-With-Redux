import thunk from "redux-thunk";
import * as actions from "./pokemonActions";
import configureStore, {MockStoreEnhanced} from "redux-mock-store";
import React from "react";
import {PokemonListState} from "../../../models/genericModels";
import moxios from 'moxios';
import {object} from "yup";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("pokemon Actions Tests", () => {
  const res = {
    count: 1050,
    next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    previous: null,
    results: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/",
      },
      {
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/",
      },
      {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon/12/",
      },
      {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/",
      },
      {
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/",
      },
      {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/",
      },
      {
        name: "pidgey",
        url: "https://pokeapi.co/api/v2/pokemon/16/",
      },
      {
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon/17/",
      },
      {
        name: "pidgeot",
        url: "https://pokeapi.co/api/v2/pokemon/18/",
      },
      {
        name: "rattata",
        url: "https://pokeapi.co/api/v2/pokemon/19/",
      },
      {
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon/20/",
      },
    ],
  };
  let store: MockStoreEnhanced<unknown, {}>;
  const setup = (data: any) => {
    store = mockStore({
      ...data,
    });
  };

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const mockSuccess = (data: any) => ({ status: 200, response: { res }});
  const mockError = (error: any) => ({ status: 503, response: { errorMessage: error}});

  it("should create POKEMON_LIST_SUCCESS when getting todos", function () {
    setup({
      loading: false,
      errorMessage: "",
      data: []
    } as PokemonListState)

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(res));
    })

    const expectedResult = [
      { type: 'POKEMON_LIST_LOADING'},
      { type: 'POKEMON_LIST_SUCCESS', payload: { res}}
    ]

    // @ts-ignore
    return store.dispatch(actions.getPokemonList(1)).then(() => {
      console.log(store.getActions())
      expect(store.getActions()).toEqual(expectedResult)
    })
  });
  it('should send a POKEMON_LIST_FAIL action', function () {
    setup({
      loading: false,
      errorMessage: "",
      data: []
    } as PokemonListState)

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError("Error Test"));
    })

    const expectedResult = [
      { type: 'POKEMON_LIST_LOADING'},
      { type: 'POKEMON_LIST_FAIL'}
    ]

    // @ts-ignore
    return store.dispatch(actions.getPokemonList(1)).then(() => {
      console.log(store.getActions())
      expect(store.getActions()).toEqual(expectedResult)
    })
  });
  it('should send a POKEMON_MULTIPLE_SUCCESS action', function () {
    setup({
      loading: false,
      errorMessage: "",
      data: []
    } as PokemonListState)

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(res));
    })

    const expectedResult = [
      { type: 'POKEMON_MULTIPLE_LOADING'},
      { type: 'POKEMON_MULTIPLE_SUCCESS', payload: { res }, pokemonName: 'test'}
    ]

    // @ts-ignore
    return store.dispatch(actions.getPokemon("test")).then(() => {
      console.log(store.getActions())
      expect(store.getActions()).toEqual(expectedResult)
    })
  });
  it('should send a POKEMON_MULTIPLE_FAIL action', function () {
    setup({
      loading: false,
      errorMessage: "",
      data: []
    } as PokemonListState)

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError("Test Error"));
    })

    const expectedResult = [
      { type: 'POKEMON_MULTIPLE_LOADING'},
      { type: 'POKEMON_MULTIPLE_FAIL' }
    ]

    // @ts-ignore
    return store.dispatch(actions.getPokemon("test")).then(() => {
      console.log(store.getActions())
      expect(store.getActions()).toEqual(expectedResult)
    })
  });
});
