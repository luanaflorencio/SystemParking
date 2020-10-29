async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("'mysql://root:lua@localhost:3306/registro")
    // consele.log("Conectou no MySql!");
    global.connection = connection;
    return connection;
}
connect();

async function selectCustomers(){
    const conn = await connect();
    const [rows] conn.query('SELECT * FROM idetification;');
    return rows;
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO idetification(placa, diahora) VALUES (?,?);';
    const values = [customer.placa, customer.diahora];
    await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
    const conn = await connect();
    const sql = 'UPDATE identification SET placa=?, diahora-=?, WHERE id=?';
    const values = [customer.placa, customer.diahora, id];
    await conn.query(sql, values);

}


module.exports = {selectCustomers, insertCustomer, updateCustomer}



