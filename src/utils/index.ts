/**
 * Vrací URL obrázku pokémona na základě zadaného id
 * @param id
 */
export const getImageById = (id: number | undefined) => {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
};
