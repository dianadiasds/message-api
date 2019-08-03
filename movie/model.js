const Sequelize = require('sequelize')
const db = require('../db.js')

const Movie = db.define(
    'movie',
    {
        title: Sequelize.STRING,
        yearOfRelease: Sequelize.INTEGER,
        synopsis: Sequelize.STRING
    }
)
module.exports = Movie
