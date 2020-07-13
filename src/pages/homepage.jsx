import React from "react";
import { PokemonList } from "../components/pokemon-list";

const HomePage = () => {
	return (
		<>
			<h3>POKEDEX</h3>
			<div className="poke-container">
				<PokemonList />
			</div>
			<footer>
				<p>
					Powered By <a href="https://pokeapi.co/">POKEAPI</a>{" "}
				</p>
			</footer>
		</>
	);
};

export default HomePage;
