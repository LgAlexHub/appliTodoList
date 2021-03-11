export function newListe({ commit }, liste) {
    commit("newListe", liste);
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