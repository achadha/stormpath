var ExpressStormpath = require('express-stormpath');
var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var db = require('./config/db');
var bodyParser = require('body-parser');

mongoose.connect(db.url);

app.use(express.static(__dirname + '/client'));
app.use('/libs', express.static(__dirname + '/node_modules'));
// app.use('/directives', express.static(__dirname + '/client/directives'));
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routes/routes')(app);

app.use(ExpressStormpath.init(app,{
    web: {
        spa: {
            enabled: true,
            view: path.join(__dirname, 'client','index.html')
        }
    }
}));

app.get('*', function(req, res) {
    res.sendfile('./client/index.html');
});

app.on('stormpath.ready', function () {
    console.log('Stormpath Ready!');
});

app.listen(process.env.PORT || 8080);
console.log("App strapped");
