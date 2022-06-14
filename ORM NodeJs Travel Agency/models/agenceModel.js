const Sequelize = require('sequelize')
const db = require('../db.js')

const Agence = db.define('agence', {
    agence_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false },
    email: {type: Sequelize.STRING, allowNull: false },
    adresse: {type: Sequelize.STRING, allowNull: false },
    phone: {type: Sequelize.INTEGER, allowNull: false }

})

module.exports = Agence