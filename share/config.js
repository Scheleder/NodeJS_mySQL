// CONFIG

const port = 8080;

    // EXPRESS
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    app.listen(port, ()=>{
        console.log("Servidor rodando na porta "+port+" - http://localhost:"+port+"");
    });


    // HANDLEBARS TEMPLATE
    const handlebars = require('express-handlebars');
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

    // BODY-PARSER
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

module.exports = app;