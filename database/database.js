const sequelize = require('sequelize');

const connection = new sequelize('precosdecalhas','root','Purchase@10',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
      },
});


module.exports = connection;