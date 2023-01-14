const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");
const precocalhas = require("./database/precocalhas");
const precosuportes = require("./database/precosuportes")
const cors = require("cors");

app.use(cors());


//Database
connection
    .authenticate()
    .then(() =>{
        console.log("conexão feita")
    })
    .catch(() => {
        console.log("falha na conexão")
    })


//Rotas    
//Rotas dados das Calhas//
app.get("/dados/calhas",(req,res) => {
    precocalhas.findAll({
        raw: true,    //Aqui estou listando os dados da tabela pergunta,Obs:o comando "{raw:true}" serve para listar apenas o dados importantes.
        order:[['id','ASC']]     //observer que o comando"order:[['id','des']]" serve para ordenar a listagem dos itens,obs:ASC= crescente || DESC = decrecente.

    })
   .then(precocalhas =>{ 
        res.status(200).send(precocalhas);
    });
});  


//Rotas dados dos Suportes//
app.get("/dados/suportes",(req,res) => {
    precosuportes.findAll({
        raw: true,    //Aqui estou listando os dados da tabela pergunta,Obs:o comando "{raw:true}" serve para listar apenas o dados importantes.
        order:[['id','ASC']]     //observer que o comando"order:[['id','des']]" serve para ordenar a listagem dos itens,obs:ASC= crescente || DESC = decrecente.

    })
   .then(precosuportes =>{ 
        res.status(200).send(precosuportes);
    });
}); 


//Rota Editar Preço Calha//
app.put("/dados/calhas/:id/:preco",(req,res) => {
var id = req.params.id;
var preco = req.params.preco;
precocalhas.update(
    { Preço: preco },
    { where: { id: id } }
  )
    .then(precocalhas =>{
        res.status(200).send(precocalhas);
    })
})

//Rota Editar Preço Suporte//
app.put("/dados/suportes/:id/:preco",(req,res) => {
    var id = req.params.id;
    var preco = req.params.preco;
    precosuportes.update(
        { Preço: preco },
        { where: { id: id } }
      )
        .then(precocalhas =>{
            res.status(200).send(precocalhas);
        })
    })

//Aqui estou dizendo para usar bodyparser para decotificar os dados enviados pela pagina.
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Rodando porta do servidor
app.listen(3000,()=>{console.log("app rodando!");});