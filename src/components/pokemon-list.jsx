import React from "react";
import { useFetch } from "../hook/useFetch";

export const PokemonList = () => {
	const pokemons = useFetch();

	return pokemons.map((pokemon) => {
		const { id, name, types } = pokemon;
		const CustomName = [...name]
			.map((n, i) => (i === 0 ? n.toUpperCase() : n))
			.join("");

		const colors = {
			fire: "#FDDFDF",
			grass: "#DEFDE0",
			electric: "#FCF7DE",
			water: "#DEF3FD",
			ground: "#f4e7da",
			rock: "#d5d5d4",
			fairy: "#fceaff",
			poison: "#98d7a5",
			bug: "#f8d5a3",
			dragon: "#97b3e6",
			psychic: "#eaeda1",
			flying: "#F5F5F5",
			fighting: "#E6E0D4",
			normal: "#F5F5F5",
			ghost: "#b5928e",
		};

		return (
			<div
				className="pokemon"
				key={id}
				style={{ backgroundColor: colors[types[0].type.name] }}
			>
				<div className="img-container"></div>
				<img
					src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
					alt={name}
				/>
				<p className="number">#{String(id).padStart(3, 0)}</p>
				<p>{CustomName}</p>
				<span>Type : {types[0].type.name}</span>
			</div>
		);
	});
};
