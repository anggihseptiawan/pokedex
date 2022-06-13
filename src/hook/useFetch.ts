import { useState, useEffect } from "react";

export const useFetch = () => {
  const [pokemon, setPokemon] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = [];
      for (let i = 1; i <= 20; i++) {
        const get = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const response = await get.json();
        data.push(response);
      }
      setPokemon(data);
    };

    getData();
  }, []);
  return pokemon;
};
