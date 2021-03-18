import * as api from "../../api/index.js"

export function newListe({ commit }, liste) {
    commit("newListe", liste);
}

export const newListe_API = ({ commit }, data) =>  {
    return api.createTodoList(data.nom_liste,data.auth_token).then(res =>{
        commit("newListe_API", res);
        return res
    }).catch(error =>{
        return error.response.status
    })
}

export function new_Todo({ commit }, todo) {
    commit("newTodo", todo);
}

export function supp_Todo({ commit }, todo) {
    commit("suppTodo", todo);
}

export function setCurrentList({ commit }, id) {
    commit("setCurrentList", id);
}

export const getListe_API = ({ commit }, data) => {
    return api.getTodoList(data.auth_token).then(res => {
        commit("setTodoLists",res);
    }).catch(error => {
        return error.response.status
    })
    //return state.todolists.find((todolist) => todolist.id === state.current_list);
};

export const supp_Todo_API = ({ commit }, data) => {
    commit("suppTodo",data.todo);
    return api.deleteTodo(data.todo.id, data.auth_token).then(res => {
        console.log(res)
    }).catch(error => {
        console.error(error)
    })
    //return state.todolists.find((todolist) => todolist.id === state.current_list);
};