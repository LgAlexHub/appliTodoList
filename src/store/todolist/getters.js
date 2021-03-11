export function getAllListes (state) {
    return state.todolists;
}

export const getListe = (state) => {
    return state.todolists.find((todolist) => todolist.id === state.current_list);
}

export const filtrer = (state) => (id) => {
    console.log(state.todolists)
    if(state.filter == "all") {
      return state.todolists
    } else if(state.filter == "completed ") {
      return state.todolists[id].filter(todo => todo.completed)
    } else if(state.filter == "not_completed") {
      return state.todolists[id].filter(todo => !todo.completed)
    }
  }
