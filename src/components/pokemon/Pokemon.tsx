import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/RootReducer";
import { getPokemon } from "../../redux/actions/pokemonActions";
import _ from "lodash";
import { InfoContainer } from "./styles";
import { PokemonInfo } from "../../models/genericModels";

interface PokemonProps {
  match: {
    params: {
      pokemon: string;
    };
  };
}

const Pokemon = (props: PokemonProps) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootState) => state.PokemonPage);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
    // eslint-disable-next-line
  }, []);

  const showData = () => {
    // @ts-ignore
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokemonData: PokemonInfo = pokemonState.data[pokemonName];
      return (
        <InfoContainer>
          <div>
            <h2>Sprites</h2>
            <img
              data-test-id="img1"
              src={pokemonData.sprites.front_default}
              alt=""
            />
            <img src={pokemonData.sprites.back_default} alt="" />
            <img src={pokemonData.sprites.front_shiny} alt="" />
            <img src={pokemonData.sprites.back_shiny} alt="" />
          </div>
          <div>
            <h2>Base Stats</h2>
            {pokemonData.stats.map((item, key: number) => {
              return (
                <p key={key} data-test-id="stats">
                  {item.stat.name}: {item.base_stat}
                </p>
              );
            })}
          </div>
          <div>
            <h2>Abilities</h2>
            {pokemonData.abilities.map((item, key: number) => {
              return <p key={key}>{item.ability.name}</p>;
            })}
          </div>
        </InfoContainer>
      );
    }

    if (pokemonState.loading) {
      return <p data-test-id="loading">Loading...</p>;
    }

    if (pokemonState.errorMessage !== "") {
      return <p data-test-id="errorMessage">{pokemonState.errorMessage}</p>;
    }
  };

  return (
    <>
      <h1>{pokemonName}</h1>
      {showData()}
    </>
  );
};

export default Pokemon;
