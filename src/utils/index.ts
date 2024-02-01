/**
 * Vrací URL obrázku pokémona na základě zadaného id
 * @param id
 */
export const getImageById = (id: number | undefined) => {
    const updatedId = id?.toString().padStart(3, "0");

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${updatedId}.png`;
};
