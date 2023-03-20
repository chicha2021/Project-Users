const Sequelize = require('sequelize'); //Biblioteca completa de seq


const sequelize = new Sequelize('estancia', 'postgres', 'postgres', {
    host: "localhost",
    dialect: "postgres"
});

module.exports = { sequelize };