export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function newListe() {
    //TODO ajouter une nouvelle liste vide
}

export function newTodo(state, todo){
    state.todolists.push({id: state.nb_id++, title:todo} );
}

export function suppTodo(state, id){
    state.todolists = state.todolists.filter(todo => todo.id != id);
}

export function setCurrentList(state, id) {
    state.current_list = id;
}