'use strict';

const path = require("path"),
    express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    passport = require('passport'),
    jwt = require('jsonwebtoken');

const config = require('./main');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use("/libs", express.static(path.join(__dirname, "../../node_modules")));
app.use("/public", express.static(path.join(__dirname, "/../../public")));

app.get('/', function(req, res) {
    res.send('Relax. We will put the home page here later.');
});

module.exports = app;