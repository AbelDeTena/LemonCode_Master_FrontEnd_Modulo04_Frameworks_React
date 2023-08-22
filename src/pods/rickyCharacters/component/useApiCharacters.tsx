import React from "react";

import {ApiProps, ApiResponse } from "./model"

export function useApiCharacters({
  characterName,
  currentPage,
}:ApiProps):ApiResponse {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
        if (characterName) {
          url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setCharacters(jsonData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [characterName, currentPage]);

  return { characters };
}
