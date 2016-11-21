var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/client'));
app.use('/libs', express.static(__dirname + '/node_modules'));
// app.use('/directives', express.static(__dirname + '/client/directives'));
app.use(bodyParser.json());

app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

app.listen(8080);
console.log("App strapped");
