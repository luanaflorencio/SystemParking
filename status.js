(async () => {
  const db = require("./dados");

  console.log('INSERT INTO idetification');
  await db.insertCustomre({placa:"acc1234", diahora: "28/10/2020 21:31" });
  console.log(result);

  console.log('SELECT * FROM identificaion');
  const idetification = await db.selectCustomers();
  console.log(identification);

  console.log('UPDATE idetification')
  await db.updateCustomre(6,{placa:"acc1235", diahora: "28/10/2020 21:31" });
  console.log(result);


})();