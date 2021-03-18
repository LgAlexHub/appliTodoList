export function getAllListes(state) {
    return state.todolists;
}

export function getListe(state)  {
    return state.todolists.find((todolist) => todolist.id === state.current_list);
}