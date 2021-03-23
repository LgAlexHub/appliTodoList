import * as API from "../../api/index";
import router from "../../router";

export function login({ commit }, data){

    return API.login(data.email,data.password).then( res=>{
            if (res!==null){
                if(res.status===200)
                {
                    commit("setAuthToken",res.data.token)
                    router.push("/")
                }
            }
            else{
               return "L'un des champs est vide"
            }
        }
        ).catch(
        error =>
        {
            return error.response.status+" : "+error.response.statusText;
        }
    )
}

export function register({commit}, data)
{
    return API.register(data.name,data.email,data.password).then( res=> {
            if (res !== null && res !== undefined) {
                if (res.status === 200) {
                    commit("setAuthToken", res.data.token)
                    router.push("/home")
                }
            } else {
                return "L'un des champs est vide ou érroné"
            }
        }
    )
}

export function logout({commit})
{
    commit("unsetAuthToken")
    router.push("/login");
}