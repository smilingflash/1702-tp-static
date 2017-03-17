var Sequelize = require('sequelize');
var db = require('./_db');

var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING
    },

    num_stars: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 1,
            max: 5
        }
    },
    amenities: {
        type: Sequelize.STRING
            // set: function(amenities) {
            //     amenities = amenities || [];
            //     if (typeof amenities === 'string') {
            //         amenities = amenities.split(",")
            //     }
            // this.setDataValue('amenities', amenities)
            // }
    }
})

module.exports = Hotel