var ExpressStormpath = require('express-stormpath');
var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/client'));
app.use('/libs', express.static(__dirname + '/node_modules'));
// app.use('/directives', express.static(__dirname + '/client/directives'));
app.use(bodyParser.json());

app.use(ExpressStormpath.init(app,{
    apiKey: {
        id: '5K4W4BHKP2NKU44P7PT2RY8KC',
        secret: 'dhCBwJg9RXQy0Ft6Ysv0m8NmHeCbH1ygTu8EXXBc4oc'
    },
    application: {
        href: 'https://api.stormpath.com/v1/applications/hPOvpQUiI37nhoP0uPrzz'
    },
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

app.listen(8080);
console.log("App strapped");
