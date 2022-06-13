import React from "react";
import { PokemonList } from "../components/PokemonList";

const HomePage = () => {
  return (
    <div>
      <h3>si-momon</h3>
      <div className="poke-container">
        <PokemonList />
      </div>
      <footer>
        <p>
          Powered By <a href="https://pokeapi.co/">POKEAPI</a>{" "}
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
