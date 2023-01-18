const sequelize = require('sequelize');

const connection = new sequelize('precosdecalhas','root','Purchase@10',{
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
        timestamps: false
      },
});


module.exports = connection;
