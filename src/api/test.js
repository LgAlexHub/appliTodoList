const api = require('./index');

(async function () {
   let res = await api.login('21801364@etu.unicaen.fr','thomasLePluBo');
   //console.log(res);
   console.log(await api.deleteTodoList(1707,res.data.token))
   //let res2 = await api.getTodoList(res);
   //console.log(JSON.stringify(res2,null,2));
}());
