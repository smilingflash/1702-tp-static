var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var models = require('./models')
var db = require()

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var env = nunjucks.configure('views',{noCache:true});

app.use(function(err, req, res, next) {
	console.error(err)
	res.status(500)
	res.send(err, err.stack)
})

// app.listen(3000, function(){
// 	console.log("Listening on 3000")
// })

//add db.sync
