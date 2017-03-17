var Promise = require('bluebird');
var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


router.get('/', function (req, res, next) {
    var outerScopeContainer = {};
    Hotel.findAll()
        .then(function (dbHotels) {
            outerScopeContainer.dbHotels = dbHotels;
            return Restaurant.findAll();
        })
        .then(function (dbRestaurants) {
            outerScopeContainer.dbRestaurants = dbRestaurants;
            return Activity.findAll();
        })
        .then(function (dbActivities) {
            res.render('index', {
                hotels: outerScopeContainer.dbHotels, // key has to match our for loop in nunjucks
                restaurants: outerScopeContainer.dbRestaurants,
                activities: dbActivities
            });
        })
        .catch(next);
})

module.exports = router