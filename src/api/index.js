const axios = require('axios');


module.exports={
    getAxiosClient :async function getAxiosClient(path, method, Token) {
        let baseUrl = 'http://138.68.74.39/api/'
        let config = Token!= null ?
        {
            method: method,
            url: baseUrl + path,
            headers: {"Authorization" : `Bearer ${Token}`}
        }
        :
        {
            method: method,
            url: baseUrl + path,
        }
        try {
            return await axios(config)
        } catch (err) {
            console.error(err);
            return  err.response.statut;
        }
    
    },
    register:async function register(name, email, password) {
        try {
            if (!name || !email || !password) return null;
            let response = await this.getAxiosClient(`register?name=${name}&email=${email}&password=${password}`, 'post');
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    },
    login:async function login(email, password) {
    
        if (!email || !password) return null;
        try {
            let response = await this.getAxiosClient(`login?email=${email}&password=${password}`,'post');
            return  response;

        } catch (err) {
            console.error(err);
            return err.response;
        }
    
    },
    getUser:async function getUser(authToken) {
        try {
            const response = await this.getAxiosClient('user','get',authToken);
            return response.data;
        } catch (err) {
            console.error(err);
            return  err.response.statut;
        }
    },
    getTodoList:async function getTodoList(authToken){
        try{
            const response = await this.getAxiosClient('todolists','get',authToken)
            return response.data;
        }catch(err){
            console.error(err);
            return err.response.statut;
        }
    },
    getTodoListIdByName:async function getTodoListIdByName(name){
        try {
            const response = await this.getTodoList();
            for(let el in response){
                if (response[el].name == name){
                    return response[el].id;
                }
            }
            return null;
        } catch (err) {
            console.error(err);
            return  err.response.statut;
        }
    },
    getTodos:async function getTodos(indexToDoList, authToken){
        try{
            const response = await this.getAxiosClient(`todos/${indexToDoList}`,'get',authToken);
            return response.data;
        }catch(err){
            console.error(err);
            return  err.response.statut;
        }
    },
    createTodoList:async function createTodoList(name,authToken){
        try{
            const response = await this.getAxiosClient(`todolist?name=${name}`,'post',authToken);
            return response.data;
        }catch(err){
            console.error(err);
            return  err.response.statut;
        }
    },
    createTodo:async function createTodo(name, completed, todolist_id,authToken){
        try{
            let response = await this.getAxiosClient(`todo?name=${name}&completed=${completed}&todolist_id=${todolist_id}`,'post',authToken);
            return response;
        }catch(err){
            console.error(err);
            return err.response.statut;
        }
    },
    completeTodo:async function completeTodo(idTodo, completed, todolist_id,authToken){
        try{
            const response = await this.getAxiosClient(`completeTodo/${idTodo}?name=&completed=${completed}&todolist_id=${todolist_id} `,'post',authToken);
            return response.data;
        }catch(err){
            console.error(err);
            return  err.response.statut;
        }
    },
    deleteTodoList:async function deleteTodoList(id,authToken){
        try{
            const response = await this.getAxiosClient(`todolist/${id}`,'DELETE',authToken);
            return response;
        }catch(err){
            console.error(err);
            return  err.response.statut;
        }
    },
    deleteTodo:async function deleteTodo(idTodo, authToken){
        try{
            const response = await this.getAxiosClient(`todo/${idTodo}`,'DELETE',authToken);
            return response;
        }catch(err){
            console.error(err);
            return  err.response.statut;
        }
    }
}

//-----MAIN POUR FAIRE DES TESTES-------

