const { sequelize } = require('../db/connection.js');
const { DataTypes } = require('sequelize');



const Colaborator = sequelize.define('colaborators', {
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
    username: {
        type: DataTypes.STRING,
    },
    pass: {
        type: DataTypes.STRING,
    },
    nacionality: {
        type: DataTypes.STRING,
    },
    civilstate: {
        type: DataTypes.STRING,
    },
    dni: {
        type: DataTypes.STRING,
    },
    cuil: {
        type: DataTypes.STRING,
    },
    domdni: {
        type: DataTypes.STRING,
    },
    domreal: {
        type: DataTypes.STRING,
    },
    loc: {
        type: DataTypes.STRING,
    },
    prov: {
        type: DataTypes.STRING,
    },
    codpostal: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    },
    /* campos para agregar
    nivelform:{
        type: DataTypes.STRING,
    },
carrera:{
        type: DataTypes.STRING,
    },
emailpersonal:{
        type: DataTypes.STRING,
    },
edad:{
        type: DataTypes.STRING,
    },
sexo:{
        type: DataTypes.STRING,
    },
phone:{
        type: DataTypes.STRING,
    },
licConducir:{
        type: DataTypes.STRING,
    },

    */
    fechanacimiento: {
        type: DataTypes.STRING,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    // ,
    // company: {
    //     type: DataTypes.ARRAY(DataTypes.INTEGER),
    // }
}, {
    timestamps: false
});

module.exports = {
    Colaborator
} 