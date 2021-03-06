const axios = require('axios');
var authToken = null;

module.exports={
    getAxiosClient :async function getAxiosClient(path, method) {
        let baseUrl = 'http://138.68.74.39/api/'
        let config =authToken!= null ? 
        {
            method: method,
            url: baseUrl + path,
            headers: {"Authorization" : `Bearer ${authToken}`}
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
        }
    
    },
    register:async function register(name, email, password) {
        try {
            if (!name || !email || !password) return null;
            let response = await this.getAxiosClient(`register?name=${name}&email=${email}&password=${password}`, 'post');
            authToken = response.data.token;
            console.log(`${email} Registerd`)
        } catch (err) {
            console.error(err);
        }
    },
    login:async function login(email, password) {
    
        if (!email || !password) return null;
        try {
            let response = await this.getAxiosClient(`login?email=${email}&password=${password}`,'post');
            authToken = response.data.token;
            console.log(`${email} Logged`)
        } catch (err) {
            console.error(err);
        }
    
    },
    getUser:async function getUser() {
        try {
            const response = await this.getAxiosClient('user','get');
            return response.data;
        } catch (err) {
            console.error(err);
        }
    },
    getTodoList:async function getTodoList(){
        try{
            const response = await this.getAxiosClient('todolists','get')
            return response.data;
        }catch(err){
            console.error(err)
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
            console.error(err)
        }
    },
    getTodos:async function getTodos(indexToDoList){
        try{
            const response = await this.getAxiosClient(`todos/${index}`,'get');
            return response.data;
        }catch(err){
            console.error(err);
        }
    },
    createTodoList:async function createTodoList(name){
        try{
            const response = await this.getAxiosClient(`todolist?name=${name}`,'post');
            return response.data;
        }catch(err){
            console.error(err);
        }
    },
    createTodo:async function createTodo(name, completed, todolist_id){
        try{
            const response = await this.getAxiosClient(`todo?name=${name}&completed=${completed}&todolist_id=${todolist_id}`,'post');
        }catch(err){
            console.error(err);
        }
    },
    completeTodo:async function completeTodo(idTodo, completed, todolist_id){
        try{
            const response = await this.getAxiosClient(`completeTodo/${idTodo}?name=&completed=${completed}&todolist_id=${todolist_id} `,'post');
            return response.data;
        }catch(err){
            console.error(err);
        }
    }
}

//-----MAIN POUR FAIRE DES TESTES-------
/*
(async function () {
    await login('21801364@etu.unicaen.fr','thomasLePluBo')
    let response = await getTodo(65);
    console.log(response)
}());
*/