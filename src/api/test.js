const api = require('./index');

(async function () {
   let res = await api.register('test','test@test.fr','123456789');
   console.log(JSON.stringify(res,null,2));
}());
