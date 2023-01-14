const sequelize = require("sequelize");
const connection = require("./database"); //obs:como o arquivo database de conexão esta mesma pasta que Perguntas,eu não preciso colocar qual é a pasta.

//Aqui estou criando e  descrevendo a Tabela.
const precocalhas = connection.define("preçocalhas",{ //perguntas é o nome da tabela.
    Tipo:{ // nome da coluna
        type: sequelize.STRING, //Obs: .String serve para textos mais curtos.
        allowNull:false //Estou impedindo que o campo tenha valores nulos,obs:o comando é opcional.
    },
    Pano:{ // nome da coluna
        type: sequelize.FLOAT, //Obs: .String serve para textos mais curtos.
        allowNull:false //Estou impedindo que o campo tenha valores nulos,obs:o comando é opcional.
    },
    Material:{ // nome da coluna
        type: sequelize.STRING,//Obs: .Text serve para textos mais longos.
        allowNull:false
        
    },
    Pintura:{ // nome da coluna
        type: sequelize.STRING,//Obs: .Text serve para textos mais longos.
        allowNull:false
        
    },
    Montagem:{ // nome da coluna
        type: sequelize.STRING,//Obs: .Text serve para textos mais longos.
        allowNull:false
        
    },
    Preço:{ // nome da coluna
        type: sequelize.FLOAT,//Obs: .Text serve para textos mais Curtos.
        allowNull:false
        
    },
    
})

//Aqui estou dando o comando para criar a tabela.

precocalhas.sync({force: false}).then(() => {}); //observe que o comando "force:false" serve para criar a tabela apenas uma vez.

module.exports = precocalhas;