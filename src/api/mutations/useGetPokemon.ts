import { useMutation, useQueryClient } from "react-query";
import { getPokemonRequest } from "../requests/getPokemon";
import { queryKeys } from "../query";

/**
 * Hook pro získání pokemona
 */
export const useGetPokemonMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (name: string) => {
            return getPokemonRequest(name);
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(queryKeys.POKEMONS);
            },
        }
    );
};
