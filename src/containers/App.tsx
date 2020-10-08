import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PokemonList from "../components/pokemonList/PokemonList";
import Pokemon from "../components/pokemon/Pokemon";
import NavBar from "../components/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path={"/"} exact component={PokemonList} />
          <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
