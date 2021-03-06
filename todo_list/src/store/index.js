import {createStore} from 'vuex'

import account from './account';
import todolist from './todolist';

export default createStore({
    debug : true,
    todos:[
    {
        id:1,
        title:"One"
    }],
    modules: {
        account,
        todolist
      },
  })