const api = require('./index');

(async function () {
   let res = await api.login('21801364@etu.unicaen.fr','thomasLePluBo');
   console.log(res);
   //let res2 = await api.getTodoList(res);
   //console.log(JSON.stringify(res2,null,2));
}());
