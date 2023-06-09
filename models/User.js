const { sequelize } = require ('../db/connection.js');
const { DataTypes } = require ('sequelize');
const { Company } = require ('./Company.js');


const User = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    pass: {
        type: DataTypes.STRING,
    },
    currentCompany: {
        type: DataTypes.STRING,
    }
    // ,
    // company: {
    //     type: DataTypes.ARRAY(DataTypes.INTEGER),
    // }
}, {
    timestamps: false
  });

module.exports = {
    User
} 

