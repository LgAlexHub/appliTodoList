export function isLoged(state){
    return state.token!==null;
}

export function getToken(state){
    return state.token;
}
