import React, { useEffect } from "react";
import { apiInstance } from ".";
import { useGetPokemonMutation } from "./api/mutations/useGetPokemon";
import { UseMutationResult } from "react-query";
import { Test } from "./utils/test";

function App() {
    /*useEffect(() => {
        getPokemons(pokemonMutation);
    }, [test, pokemonMutation]);*/
    return (
        <div className="App">
            <Test />
        </div>
    );
}

export default App;
