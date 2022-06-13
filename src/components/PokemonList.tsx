import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetch } from "../hook/useFetch";
import { Pokemon } from "../@types/pokemon";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonState, setPokemonState] = useState(2);

  const initPokemons = useFetch();

  useEffect(() => {
    setPokemons(initPokemons);
  }, [initPokemons]);

  const fetchMore = async () => {
    // if (window.scrollY < 30) return; // the thing with the `next` props in <InfiniteSCroll /> is, it will immediately call this function even if scrollTreshold is less than 50%, this solution was for prevent fetchMore function run immediately.

    const data = [];
    for (let i = pokemonState * 20 - 19; i <= pokemonState * 20; i++) {
      const get = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const response = await get.json();
      data.push(response);
    }

    setPokemonState(pokemonState + 1);
    setPokemons([...pokemons, ...data]);
  };

  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "10px",
    width: "80%",
    margin: " 0 auto 120px auto",
    padding: "20px 0",
  };

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={fetchMore}
      hasMore={true}
      scrollThreshold="200px"
      style={style}
      loader={<h4>Loading...</h4>}
    >
      {pokemons.map((pokemon) => {
        const { id, name, types } = pokemon;

        const colors: any = {
          fire: "#ff7d56",
          grass: "#91f597",
          electric: "#f5e575",
          water: "#b4ddf1",
          ground: "#e1dbd5",
          rock: "#d5d5d4",
          fairy: "#fceaff",
          poison: "#bf98d7",
          bug: "#f5cb9f",
          dragon: "#97b3e6",
          psychic: "#eaeda1",
          flying: "#F5F5F5",
          fighting: "#ffebc4",
          normal: "#fbd7f9",
          ghost: "#b5928e",
        };

        return (
          <div
            className="pokemon"
            key={id}
            style={{ backgroundColor: colors[types[0].type.name] }}
          >
            <img
              src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={name}
            />
            <p className="number">#{String(id).padStart(3, "0")}</p>
            <p className="poke-name">{name}</p>
            <span>type : {types[0].type.name}</span>
          </div>
        );
      })}
    </InfiniteScroll>
  );
};
