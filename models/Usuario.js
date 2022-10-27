const {DataTypes, Sequelize} = require('sequelize');
const conn = require('./db');

const Usuario = conn.define('usuarios',{
nome:{type : DataTypes.STRING, allowNull: false},
sobrenome:{type : DataTypes.STRING, allowNull: false},
idade:{type : DataTypes.INTEGER, allowNull: false},
email:{type : DataTypes.STRING, allowNull: false}
});
    
// Usuario.sync({force : true}); //Cria tabela

//Criando usuário
// Usuario.create({
//   nome : "João",
//   sobrenome : "Scheleder",
//   idade: 17,
//   email: "joao@scheleder.com"
// })

// the defined model is the class itself
// console.log(Usuario === db.conn.models.usuarios); // true

module.exports =  Usuario;