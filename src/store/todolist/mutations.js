export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function newListe(state,list) {
    if(list!=="")
        state.todolists.push({id: state.nb_id++, title:list} );
}

export function newTodo(state, todo){
    if(todo!=="")
        console.log(state);
}

export function suppTodo(state, id){
    state.todolists = state.todolists.filter(todo => todo.id != id);
}

export function setCurrentList(state, id) {
    state.current_list = id;
}