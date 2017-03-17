var Sequelize = require('sequelize');
var db = require('./_db');

var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING
        //defaultValue: [],
        // set: function(cuisine) {
        //     cuisine = cuisine || [];
        //     if (typeof cuisine === 'string') {
        //         cuisine = cuisine.split(",")
        //     }
        // this.setDataValue('cuisine', cuisine)
        // },
        // allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
});

module.exports = Restaurant
