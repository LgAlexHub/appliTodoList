export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function setAuthToken(state, authToken)
{
    localStorage.setItem("token",authToken)
    state.token=authToken
}

export function unsetAuthToken(state)
{
    state.token=null;
    localStorage.removeItem("token")
}