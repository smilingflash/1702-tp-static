var Sequelize = require('sequelize');
var db = require('./_db');


var Place = require('./place')
var Restaurant = require('./restaurant')
var Activity = require('./activity');
var Hotel = require('./hotel')

Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = db