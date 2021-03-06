export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function newListe() {
    //TODO ajouter une nouvelle liste vide
}

export function newTodo(state, todo){
    console.log(todo)
    state.todos.push(todo);
    console.log(todo)
}