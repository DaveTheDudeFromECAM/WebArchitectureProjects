const Sequelize = require('sequelize')
const db = require('../db.js')

const Destination = db.define('destination', {
    destination_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    payes: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Destination