const Sequelize = require('sequelize')
const sequelize = new Sequelize( 
    'db_travel_agencies', 
    'root', 
    'root',  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
   }
);
module.exports = sequelize