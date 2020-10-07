import React, { useState } from "react";

interface SearchProps {
  history: {
    push: any;
  };
}

const Search = (props: SearchProps) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        placeholder="Search"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => props.history.push(`/pokemon/${search}`)}>
        Search{" "}
      </button>
    </div>
  );
};

export default Search;
