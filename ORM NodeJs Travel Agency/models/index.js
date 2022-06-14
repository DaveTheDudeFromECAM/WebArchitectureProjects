const Sequelize = require('sequelize')
const sequelize = require('../db.js');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Agence = require('../models/agenceModel');
db.Destination = require('../models/destinationModel');

//db.Agence.hasMany( db.Destination, { foreignKey: "agence_id" });
//db.Destination.belongsTo( db.Agence, { foreignKey: "agence_id" });

db.Agence.belongsToMany(db.Destination, {
    through: "link",
    foreignKey: "agence_id",
    as: "destinations"
});

db.Destination.belongsToMany(db.Agence, {
    through: "link",
    foreignKey: "destination_id",
    as: "agencies"
});

module.exports = db