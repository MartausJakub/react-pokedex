import { apiInstance } from "../..";
import { BasePokemonResponse } from "../responses/pokemon";

/**
 * Request pro získání pokémona
 */
export const getPokemonRequest = async (name: string) => {
    const { data } = await apiInstance.get<BasePokemonResponse>(`/pokemon/${name}`);
    return data;
};
