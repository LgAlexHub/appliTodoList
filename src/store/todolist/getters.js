export function getAllListes(state) {
    return state.todolists;
}

export function getListe(state)  {
    return state.todolists.find((todolist) => todolist.id === state.current_list);
}

export const getTodosRemains = (state) => (id) => {
    console.log(state.todolists[id].todos)
    if (state.todolists[id].todos != null)
        return state.todolists[id].todos.filter(todo => !todo.completed).length
}

export function getCurrentListe(state){
    return state.current_list;
}
