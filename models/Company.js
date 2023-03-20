const { sequelize } = require ('../db/connection.js');
const { DataTypes } = require ('sequelize');
// const { Pets } = require ('./Pets.js');


const Company = sequelize.define('companies', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
    },
    codemp: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false
  });

module.exports = {
    Company
} 
