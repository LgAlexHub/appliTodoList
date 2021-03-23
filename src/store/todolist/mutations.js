export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function newListe(state,list) {
    if(list!=="")
        state.todolists.push({id: state.nb_id++, name:list, todos:[]} );
    console.log(state.todolists)
}

export function newListe_API(state,list) {
    console.log(list)
    if(list!==""){
        list.todos = [];
        state.todolists.push(list);
    }        
    console.log(state.todolists)
}

export function newTodo(state, todo){
    if(todo!==""){
        let id=state.current_list
        console.log("Id de la liste à modifier:"+id)
        let nb_todos=state.todolists[id].todos.length
        state.todolists[id].todos.push({id: nb_todos=nb_todos+1, name:todo.name, completed:false} );
    }
}

export function newTodo_API(state, todo){
    if(todo!==""){
        console.log(todo)
        const todoList = state.todolists.find(todoList => todoList.id === state.current_list);
        todoList.todos.push(todo);
        console.log(todoList)
    }
}

export function suppTodo(state, data){
    //let list=state.todolists.find((todolist) => todolist.id === state.current_list)
    //state.todolists[state.todolists.indexOf(list)].todos.splice(id,id+1);  
    console.log(data)
    const todolist = state.todolists.find(todolist => todolist.id === state.current_list);
    todolist.todos = todolist.todos.filter(todo => todo.id !== data.id);
   //state.todolists = state.todolists[state.current_list].filter(todo => todo.id != id);
}

export function suppTodoList(state, data){ 
    console.log(data)
    for(let i = 0; i < state.todolists.length; i++){
        if(data == state.todolists[i].id){
            state.todolists.splice(i, 1);
        }
    }
}

export function modifyTodo(state, data){
    const todolist = state.todolists.find(todolist => todolist.id === state.current_list);
    const todo = todolist.todos.find(todo => todo.id === data.id);
    todo.name = data.name;
    todo.completed = data.completed;
}

export function setCurrentList(state, id) {
    state.current_list = id;
    console.log("Current list : "+state.current_list)
}

export function setTodoLists(state,data){
    state.todolists=data
}