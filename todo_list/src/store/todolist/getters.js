export function listes() {
    
}

export const allTodos = (state) => {
    return state.todolists;
}

export const getListe = (state) => (id) => {
    return state.properties.find((todolist) => todolist.id === id);
}