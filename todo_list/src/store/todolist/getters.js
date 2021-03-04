export function listes(state) {
    return state.properties;
}

export const getListe = (state) => (id) => {
    return state.properties.find((todoliste) => todoliste.id === id);
}