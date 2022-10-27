const {DataTypes, Sequelize} = require('sequelize');
const conn = require('./db');

const Post = conn.define('posts',{
titulo:{type : DataTypes.STRING, allowNull: false},
conteudo:{type : DataTypes.TEXT, allowNull: false}
});

// Post.sync({force : true});

// Criando postagem
// Post.create({
//   titulo : "Exemplo",
//   conteudo : "Este é um exemplo!"
// })

// the defined model is the class itself
// console.log(Post === db.conn.models.posts); // true 

module.exports = Post;