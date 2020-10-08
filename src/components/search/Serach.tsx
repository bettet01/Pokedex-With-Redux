import React, { useState } from "react";

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
    <div>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={redirectPage}>Search </button>
    </div>
  );
};

export default Search;
