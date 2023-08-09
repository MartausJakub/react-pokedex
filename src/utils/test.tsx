import { Fragment, useState } from "react";
import { useGetPokemonMutation } from "../api/mutations/useGetPokemon";
import { getImageById } from ".";

export const Test = () => {
    const pokemonMutation = useGetPokemonMutation();
    const [details, setDetails] = useState<any>();
    const handlePokemon = async () => {
        const pokeDetails = await pokemonMutation.mutateAsync("bulbasaur");
        setDetails(pokeDetails);
        console.log(pokeDetails);
    };

    return (
        <Fragment>
            <h4>{JSON.stringify(details)}</h4>
            <img alt="img" src={getImageById(details?.id || "")} />
            <button onClick={handlePokemon}>get pokemon</button>
        </Fragment>
    );
};
