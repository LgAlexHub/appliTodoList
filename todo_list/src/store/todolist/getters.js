export function listes() {
    
}

export const allTodos = (state) => console.log(state.todos)

export const getListe = (state) => (id) => {
    return state.properties.find((todolist) => todolist.id === id);
}