export function newListe({ commit }){
    commit("newListe");
}

export function new_Todo({ commit }, todo){
    commit("newTodo", todo);
}

export function supp_Todo({ commit }, todo){
    commit("suppTodo", todo);
}