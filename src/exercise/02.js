// src/exercise/02.js
import { useState, useEffect } from "react";

/**
 * Custom Hook: usePokemon
 * -----------------------
 * Fetches Pokémon data from the PokeAPI given a Pokémon name.
 * Returns an object with the fetched data.
 *
 * Example:
 * const { data } = usePokemon("charmander");
 */

export function usePokemon(name) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!name) return;

    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const result = await response.json();
        setData({ id: result.id, name: result.name });
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }

    fetchPokemon();
  }, [name]);

  return { data };
}
