import React, { useState } from "react";
import {Button, Container, Input} from "./styles";

interface SearchProps {
  history: {
    push: any;
  };
}

const Search = (props: SearchProps) => {
  const [search, setSearch] = useState("");

  const redirectPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.history.push(`/pokemon/${search}`);
  };

  return (
    <Container>
      <Input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={redirectPage}>Search </Button>
    </Container>
  );
};

export default Search;
