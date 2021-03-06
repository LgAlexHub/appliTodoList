import {createStore} from 'vuex'

import account from './account';
import todolist from './todolist';

export default createStore({
    debug : true,
    state:{
        todos:[
            {
                id:1,
                title:"One"
            },
            {
                id:2,
                title:"Coucou"
            }
        ]

    },
    modules: {
        account,
        todolist
      },
  })