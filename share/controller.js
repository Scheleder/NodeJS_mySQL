const app = require('./config');
const Post = require('../models/Post');
const Usuario = require('../models/Usuario')


    // ROTAS
    app.get("/", async (req, res) =>{

        await Post.findAll({order:[['createdAt', 'DESC']]}).then(function(posts){
          res.render("home", {posts: posts});
        });
        
        //const posts = await Post.findAll();
        //console.log("All posts:", JSON.stringify(posts, null, 2));
        // const numPosts = await Post.count();
        // console.log("Total de "+numPosts+" postagens.");
    });

  
    app.get("/novoPost", async (req, res) =>{
        res.render('addPostForm');
    })
  
    app.post("/posting", async (req, res) =>{
      try {
        Post.create({
          titulo : req.body.titulo,
          conteudo : req.body.conteudo
        });
        console.log("Postagem "+"'"+req.body.titulo+"'"+" cadastrada com sucesso!");
      } catch (error) {
        console.warn("Falha ao postar: "+error);
      }    
      res.redirect("/novoPost");  
  })


    app.get("/novoUser", async (req, res) =>{
      res.render('addUserForm');
  })
  
  app.post("/register", async (req, res) =>{
    try {
      Usuario.create({
        nome : req.body.nome,
        sobrenome : req.body.sobrenome,
        idade : req.body.idade,
        email : req.body.email
      });
      console.log("Usuário "+req.body.nome+" "+req.body.sobrenome+" cadastrado com sucesso!");
    } catch (error) {
      console.warn("Falha ao registrar: "+error);
    }
    res.redirect("/novoUser");
  })

  app.get("/users", async (req, res) =>{

    await Usuario.findAll().then(function(users){
      res.render("users", {users: users});
    });
    
    // const users = await Usuario.findAll();
    // console.log(JSON.stringify(users, null, 2));
    // const numUsers = await Usuario.count();
    // console.log("Total de "+numUsers+" usuários cadastrados.");
});

app.get("/deletar/:id", async function(req, res){
    try{
    await Post.destroy({where:{'id': req.params.id}});
    console.log("Postagem deletada com sucesso!")
    res.redirect("/");
    } catch(error){
    console.warn("Erro ao deletar!")
    }
  
});