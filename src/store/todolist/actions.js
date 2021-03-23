import * as api from "../../api/index.js"

export const getListe_API = ({ commit }, data) => {
    return api.getTodoList(data.auth_token).then(res => {
        commit("setTodoLists", res);
    }).catch(error => {
        return error.response.status
    })
};

export function setCurrentList({ commit }, id) {
    commit("setCurrentList", id);
}

export function new_Todo({ commit }, data) {
    console.log(data)
    return api.createTodo(data.name, data.completed, data.todolist_id, data.auth_token).then(res => {
        console.log(res)
        commit("newTodo_API", res.data);
    }).catch(error => {
        commit("newTodo", data);
        console.error(error)
    })
}

export const newListe = ({ commit }, data) =>  {
    return api.createTodoList(data.name,data.auth_token).then(res =>{
        console.log(res)
        commit("newListe_API", res);
        return res
    }).catch(error =>{
        commit("newListe", data.name);
        return console.error(error)
    })
}

export const modify_todo = ({ commit }, data) =>{
    console.log(data)
    commit("modifyTodo",data);
    return api.modifyTodo(data.id, data.name, data.completed, data.todolist_id, data.auth_token).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
};

export const suppTodoList = ({ commit }, data) =>  {
    return api.deleteTodoList(data.id,data.auth_token).then(res =>{
        console.log(res)
        commit("suppTodoList", data.id);
        return res
    }).catch(error =>{
        return console.error(error)
    })
}

export function supp_Todo({ commit }, data) {
    commit("suppTodo",data.todo);
    console.log(data.todo.id)
    return api.deleteTodo(data.todo.id, data.auth_token).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
}

export const updateCompleteTodo = ({ commit }, data) => {
    console.log(data.completed)
    if(data.completed==0 || data.completed==false){
        data.completed=1
    }else if(data.completed==1 || data.completed==true){
        data.completed=0
    }
    return api.completeTodo(data.id, data.name, data.completed,data.todolist_id, data.auth_token).then(res => {
        commit("updateCompleteTodo", data);
        console.log(res)
    }).catch(error => {
        console.error(error)
    });
}