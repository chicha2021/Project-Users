const Sequelize = require('sequelize'); //Biblioteca completa de seq


const sequelize = new Sequelize('Estancia', 'postgres', 'Invent$22', {
    host: "localhost",
    dialect: "postgres"
});

module.exports = { sequelize };