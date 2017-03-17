var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var models = require('./models')
var db = models.db; // same as require('./models').db;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var env = nunjucks.configure('views', { noCache: true });

app.get('/', function (req, res) {
    res.render('index');
})

// error handler
// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.error(err);
    res.render('error');
});

db.sync({ force: true })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001!');
        });
    })
    .catch(console.error);