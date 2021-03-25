const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mysql://root:rootroot@localhost/ecommerce_db')

module.exports = sequelize 