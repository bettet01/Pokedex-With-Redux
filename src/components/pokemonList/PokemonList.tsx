import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/RootReducer";

import _ from "lodash";
import { getPokemonList } from "../../redux/actions/pokemonActions/pokemonActions";
import { ListItem, ListLink, ListWrapper } from "./style";
import { Pokemon } from "../../models/genericModels";
import Search from "../search/Serach";
import { useHistory } from "react-router";
import Paginator from "../paginator/paginator";

interface PokemonListProps {}

const PokemonList = (props: PokemonListProps) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.PokemonList);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  useEffect(() => {
    fetchData(1);
    // stupid circular error that needs to be ignored
    // eslint-disable-next-line
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <>
          <Search history={history} />
          <ListWrapper test-data-id="pokeList">
            {pokemonList.data.map((item: Pokemon, key: number) => {
              return (
                <ListItem key={key}>
                  <p>{item.name}</p>
                  <ListLink to={`/pokemon/${item.name}`}>View</ListLink>
                </ListItem>
              );
            })}
          </ListWrapper>
          <Paginator fetchData={fetchData} count={pokemonList.count} />
        </>
      );
    }
    if (pokemonList.loading) {
      return <p test-data-id="loading">is Loading</p>;
    }

    if (pokemonList.errorMessage !== "") {
      return <p>{pokemonList.errorMessage}</p>;
    }
  };
  return <div>{showData()}</div>;
};

export default PokemonList;
