const {DataTypes, Sequelize} = require('sequelize'); 
require('dotenv').config(); 
const uri = process.env.MYSQL_URI;
const db_name = process.env.MYSQL_DATABASE;
const db_user = process.env.MYSQL_USERNAME;
const db_pass = process.env.MYSQL_PASSWORD;
const db_host = process.env.MYSQL_HOSTNAME;
const conn = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  dialect: 'mysql',
  query:{raw:true}
});

//const conn = new Sequelize(uri);

try {
    conn.authenticate();
    console.log("Conectado ao mySQL com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao mySQL: ", error);
  }

  module.exports = conn;
  