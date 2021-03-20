import * as api from "../../api/index.js"

export function newListe({ commit }, liste) {
    commit("newListe", liste);
}

export function new_Todo({ commit }, data) {
    commit("newTodo_API", data);
    return api.createTodo(data.name, data.completed, data.todolist_id, data.auth_token).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
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

export function supp_Todo({ commit }, data) {
    commit("suppTodo",data.todo);
    console.log(data.todo.id)
    return api.deleteTodo(data.todo.id, data.auth_token).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
}

export function setCurrentList({ commit }, id) {
    commit("setCurrentList", id);
}


export const newListe_API = ({ commit }, data) =>  {
    return api.createTodoList(data,data.auth_token).then(res =>{
        commit("newListe_API", res);
        return res
    }).catch(error =>{
        return console.error(error)
    })
}

export const getListe_API = ({ commit }, data) => {
    return api.getTodoList(data.auth_token).then(res => {
        commit("setTodoLists",res);
    }).catch(error => {
        return error.response.status
    })
    //return state.todolists.find((todolist) => todolist.id === state.current_list);
};