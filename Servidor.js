// Codigo Necessario //
const http = require('http');
const express = require('express');1
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://unifscitta:wa4qimarif7oJQoZ@auladb.rfflmjt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Servidor Abrido');
});

app.get('/',function(req,res){
    res.redirect("Head.html")
});


// Final de Codigo Necessario //



// Código para Login / Get - Post - Template //
app.post('/cadastra',function(req, res) {
    nomecad =req.body.name;
    senhacad =req.body.pass;
    res.redirect('Login.html');
})
app.post("/login", function (req,res){
    var nome = req.body.name;
    var senha = req.body.pass;
    if (nome === nomecad && senha === senhacad){
        res.render("resposta2", {nome,senha})
    }
    else{
        res.render("resposta1",{nome,senha})
    }
})

//Final de Código para Login / Get - Post - Template //
// Código para Banco de dados / Create e Read //

app.post("/criar_post", function(req, resp) {

    // realiza conexão com banco de dados
    client.connect((err) => {

        // cria dados do usuário
        let post = {
            db_nome: req.body.nome,
            db_titulo: req.body.titulo,
            db_post: req.body.post,
        };

        // salva dados no banco
        client
            .db("BD_Posts")
            .collection("Posts")
            .insertOne(post);

        // busca todos os posts no banco de dados
        client
            .db("BD_Posts")
            .collection("Posts")
            .find().toArray(function(err, items) {
            // renderiza a resposta para o navegador
            resp.render("resposta_usuario", { Posts: items });
        });
    });
});

// Final de Código para Banco de dados / Create e Read //

