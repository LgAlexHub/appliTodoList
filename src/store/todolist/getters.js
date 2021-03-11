export function listes() {
    
}

export const allTodos = (state) => {
    return state.todolists;
}

export const getListe = (state) => (id) => {
    return state.properties.find((todolist) => todolist.id === id);
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
